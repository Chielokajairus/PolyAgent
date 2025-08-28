<script lang="ts">
	import { currentLanguage, translations } from '$utils/i18n';
	
	$: techCategories = $currentLanguage === 'de' ? translations.de.tech.categories : translations.en.tech.categories;
</script>

<section id="stack" class="relative py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-6xl px-4 sm:px-8">
		<!-- Section Header -->
		<div class="mb-12 sm:mb-24">
			<div class="space-y-4 sm:space-y-6">
				<p class="text-xs font-mono text-gray-500 tracking-widest uppercase">{$currentLanguage === 'de' ? translations.de.tech.title : translations.en.tech.title}</p>
				<h2 class="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight max-w-2xl">
					{$currentLanguage === 'de' ? translations.de.tech.subtitle : translations.en.tech.subtitle}
				</h2>
			</div>
		</div>

		<!-- Tech Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
			{#each techCategories as category, categoryIndex}
				<div class="space-y-8">
					<!-- Category Header -->
					<div class="pb-6 border-b border-gray-100">
						<h3 class="text-lg font-light text-gray-900 mb-3 tracking-tight">
							{category.category}
						</h3>
						<div class="w-8 h-px bg-gray-400"></div>
					</div>

					<!-- Technologies -->
					<div class="space-y-8">
						{#each category.technologies as tech, techIndex}
							<div class="group">
								<div class="flex items-start gap-4">
									<!-- Node indicator -->
									<div class="mt-2 flex-shrink-0">
										<div class="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-gray-600 transition-colors duration-300"></div>
									</div>

									<!-- Content -->
									<div class="min-w-0 flex-1">
										<h4 class="text-gray-900 font-light text-sm mb-2 group-hover:text-gray-700 transition-colors">
											{tech.name}
										</h4>
										<p class="text-gray-600 text-xs leading-relaxed font-light">
											{tech.description}
										</p>
									</div>
								</div>

								<!-- Connection line to next item -->
								{#if techIndex < category.technologies.length - 1}
									<div class="ml-0.5 mt-4 w-px h-4 bg-gradient-to-b from-gray-200 to-transparent"></div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Bottom CTA -->
		<div class="mt-16 sm:mt-32 text-center">
			<div class="inline-flex items-center gap-4 px-8 py-4 border border-gray-200 hover:border-gray-400 transition-colors">
				<span class="text-gray-600 text-sm font-light">{$currentLanguage === 'de' ? translations.de.tech.cta : translations.en.tech.cta}</span>
				<div class="w-4 h-px bg-gray-400"></div>
			</div>
		</div>
	</div>
</section>
