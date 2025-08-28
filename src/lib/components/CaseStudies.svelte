<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollAnimations } from '$utils/animations';
	import { currentLanguage, translations } from '$utils/i18n';
	
	onMount(() => {
		// Initialize scroll animations for case study cards
		setTimeout(() => {
			scrollAnimations.fadeInUp('.case-study-card', 0.1);
			
			// Initialize counter animations for metrics
			scrollAnimations.counterAnimation('.metric-40', 40);
			scrollAnimations.counterAnimation('.metric-99', 99);
			scrollAnimations.counterAnimation('.metric-100', 100);
			scrollAnimations.counterAnimation('.metric-50', 50);
		}, 500);
	});
	
	$: cases = $currentLanguage === 'de' ? translations.de.cases.items : translations.en.cases.items;
</script>

<section id="cases" class="relative py-16 sm:py-24 lg:py-32">
			<div class="mx-auto max-w-6xl px-4 sm:px-8">
		<!-- Section Header -->
		<div class="mb-12 sm:mb-24">
			<div class="space-y-4 sm:space-y-6">
				<p class="text-xs font-mono text-gray-500 tracking-widest uppercase">{$currentLanguage === 'de' ? translations.de.cases.title : translations.en.cases.title}</p>
				<h2 class="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight max-w-2xl">
					{$currentLanguage === 'de' ? translations.de.cases.subtitle : translations.en.cases.subtitle}
				</h2>
			</div>
		</div>

		<!-- Cases Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
			{#each cases as caseStudy, index}
				<article class="group relative case-study-card">
					<!-- Case number -->
					<div class="text-xs font-mono text-gray-300 mb-6">
						{caseStudy.id}
					</div>

					<!-- Card content -->
					<div class="space-y-6">
						<!-- Header -->
						<div>
							<h3 class="text-xl font-light text-gray-900 mb-2 tracking-tight">
								{caseStudy.title}
							</h3>
							<p class="text-sm text-gray-600 font-light">
								{caseStudy.subtitle}
							</p>
						</div>

						<!-- Description -->
						<p class="text-gray-700 leading-relaxed text-sm font-light">
							{caseStudy.description}
						</p>

						<!-- Metrics -->
						<div class="space-y-3 pt-4 border-t border-gray-100">
							{#each caseStudy.metrics as metric}
								<div class="flex items-center gap-3 text-xs text-gray-600">
									<div class="w-1 h-1 bg-gray-400 rounded-full"></div>
									<span class="font-light">{@html metric}</span>
								</div>
							{/each}
						</div>

						<!-- Tags -->
						<div class="flex flex-wrap gap-2 pt-2">
							{#each caseStudy.tags as tag}
								<span class="px-2 py-1 text-xs text-gray-500 border border-gray-200 font-mono">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
