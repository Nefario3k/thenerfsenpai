export type GitHubContributionDay = {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
};

export type GitHubContributionsResponse = {
	ok: boolean;
	totalContributions: number;
	weeks: GitHubContributionDay[][];
	message?: string;
};
