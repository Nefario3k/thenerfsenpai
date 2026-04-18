<template>
	<div class="tw:space-y-6">
		<div
			v-if="pending"
			class="tw:rounded-md tw:border tw:border-bc-stroke tw:p-6 tw:text-sm tw:text-tc-secondary tw:font-verdana"
			aria-busy="true"
		>
			Loading contribution graph…
		</div>

		<div
			v-else-if="error"
			class="tw:rounded-md tw:border tw:border-bc-stroke tw:p-6 tw:text-sm tw:text-tc-secondary tw:font-verdana"
			role="alert"
		>
			Could not load contributions.
		</div>

		<div
			v-else-if="payload && !payload.ok"
			class="tw:rounded-md tw:border tw:border-bc-stroke tw:p-6 tw:text-sm tw:text-tc-secondary tw:font-verdana"
			role="status"
		>
			{{ payload.message || "Contributions are unavailable." }}
		</div>

		<div
			v-else-if="payload?.ok && !gridWeeks.length"
			class="tw:text-sm tw:text-tc-secondary tw:font-verdana"
			role="status"
		>
			No contribution days in the last year.
		</div>

		<template v-else-if="payload?.ok && gridWeeks.length">
			<div
				class="tw:flex tw:flex-col tw:md:gap-16 tw:gap-6 tw:md:flex-row tw:md:items-center tw:md:justify-between"
			>
				<div
					class="tw:min-w-0 tw:flex-1 tw:overflow-x-auto tw:md:order-0 tw:order-2"
				>
					<div
						class="tw:grid tw:gap-[3px] tw:p-1"
						:style="gridStyle"
						role="img"
						:aria-label="`GitHub contributions: ${payload.totalContributions} in the last year`"
					>
						<div
							v-for="cell in flatCells"
							:key="cell.date"
							:class="[
								'tw:aspect-square tw:min-h-[10px] tw:rounded-[2px]',
								levelClass(cell.level),
							]"
							:title="`${cell.date}: ${cell.count} contribution${
								cell.count === 1 ? '' : 's'
							}`"
						/>
					</div>
				</div>
				<div
					class="tw:flex tw:shrink-0 tw:flex-col tw:gap-2 tw:lg:items-end tw:font-verdana tw:text-xs tw:text-tc-secondary"
				>
					<div class="tw:flex tw:items-center tw:gap-2">
						<span>Less</span>
						<div class="tw:flex tw:gap-[3px]">
							<div
								v-for="lv in 5"
								:key="'legend-' + lv"
								:class="[
									'tw:h-[10px] tw:w-[10px] tw:rounded-[2px]',
									levelClass((lv - 1) as 0 | 1 | 2 | 3 | 4),
								]"
								aria-hidden="true"
							/>
						</div>
						<span>More</span>
					</div>
				</div>
			</div>
			<p class="tw:text-sm tw:text-tc-secondary tw:font-verdana">
				{{ payload.totalContributions.toLocaleString() }} contributions in the
				past year
			</p>
		</template>
	</div>
</template>

<script lang="ts" setup>
	import type {
		GitHubContributionDay,
		GitHubContributionsResponse,
	} from "../../../shared/githubContributions";

	const props = defineProps<{
		pending: boolean;
		error: unknown;
		payload: GitHubContributionsResponse | null;
	}>();

	const gridWeeks = computed(() => props.payload?.weeks ?? []);

	const gridStyle = computed(() => ({
		gridTemplateColumns: `repeat(${gridWeeks.value.length}, minmax(0, 1fr))`,
		gridTemplateRows: "repeat(7, minmax(0, 1fr))",
	}));

	const flatCells = computed(() => {
		const weeks = gridWeeks.value;
		if (!weeks.length) return [] as GitHubContributionDay[];

		const cells: GitHubContributionDay[] = [];
		for (let r = 0; r < 7; r++) {
			for (let c = 0; c < weeks.length; c++) {
				const day = weeks[c]?.[r];
				if (day) cells.push(day);
			}
		}
		return cells;
	});

	function levelClass(level: 0 | 1 | 2 | 3 | 4): string | undefined {
		const map: Record<number, string> = {
			0: "tw:bg-tc-tertiary/20",
			1: "tw:bg-tc-tertiary",
			2: "tw:bg-tc-link/40",
			3: "tw:bg-tc-link/60",
			4: "tw:bg-tc-link",
		};
		return map[level] ?? map[0];
	}
</script>
