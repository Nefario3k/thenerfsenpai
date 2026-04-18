import { setHeader } from "h3";
import type { GitHubContributionDay, GitHubContributionsResponse } from "../../../shared/githubContributions";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const QUERY = `
query ($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}
`;

type GraphDay = { date: string; contributionCount: number };

function countToLevel(count: number, max: number): GitHubContributionDay["level"] {
	if (count <= 0) return 0;
	if (max <= 0) return 0;
	const ratio = count / max;
	if (ratio <= 0.25) return 1;
	if (ratio <= 0.5) return 2;
	if (ratio <= 0.75) return 3;
	return 4;
}

function normalizeWeeks(weeks: { contributionDays: GraphDay[] }[]): GitHubContributionDay[][] {
	const flatCounts = weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount));
	const max = flatCounts.length ? Math.max(...flatCounts) : 0;

	return weeks.map((week) =>
		week.contributionDays.map((d) => ({
			date: d.date,
			count: d.contributionCount,
			level: countToLevel(d.contributionCount, max),
		})),
	);
}

export default defineEventHandler(async (event): Promise<GitHubContributionsResponse> => {
	setHeader(
		event,
		"Cache-Control",
		"public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
	);

	const config = useRuntimeConfig(event);
	const token = config.githubToken as string;
	const login = (config.public as { githubLogin?: string }).githubLogin?.trim() || "";

	if (!token || !login) {
		return {
			ok: false,
			totalContributions: 0,
			weeks: [],
			message:
				"GitHub contributions are not configured. Set NUXT_GITHUB_TOKEN and NUXT_PUBLIC_GITHUB_LOGIN.",
		};
	}

	try {
		const body = await $fetch<{
			data?: {
				user?: {
					contributionsCollection?: {
						contributionCalendar?: {
							totalContributions: number;
							weeks: { contributionDays: GraphDay[] }[];
						};
					};
				} | null;
			};
			errors?: { message: string }[];
		}>(GITHUB_GRAPHQL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: {
				query: QUERY,
				variables: { login },
			},
		});

		if (body.errors?.length) {
			return {
				ok: false,
				totalContributions: 0,
				weeks: [],
				message: body.errors.map((e) => e.message).join("; "),
			};
		}

		const user = body.data?.user;
		if (!user?.contributionsCollection?.contributionCalendar) {
			return {
				ok: false,
				totalContributions: 0,
				weeks: [],
				message: `No contribution data for GitHub user "${login}".`,
			};
		}

		const cal = user.contributionsCollection.contributionCalendar;
		const weeks = normalizeWeeks(cal.weeks ?? []);

		return {
			ok: true,
			totalContributions: cal.totalContributions ?? 0,
			weeks,
		};
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Failed to load GitHub contributions.";
		return {
			ok: false,
			totalContributions: 0,
			weeks: [],
			message: msg,
		};
	}
});
