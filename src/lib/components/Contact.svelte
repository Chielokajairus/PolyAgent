<script lang="ts">
	import { currentLanguage, translations } from '$utils/i18n';
	
		$: contactMethods = $currentLanguage === 'de' ? translations.de.contact.methods : translations.en.contact.methods;
</script>

<section id="contact" class="relative py-32">
	<div class="mx-auto max-w-6xl px-8">
		<div class="grid lg:grid-cols-2 gap-20 items-start">
			<!-- Content Column -->
			<div class="space-y-12">
				<div class="space-y-6">
					<p class="text-xs font-mono text-gray-500 tracking-widest uppercase">{$currentLanguage === 'de' ? translations.de.contact.title : translations.en.contact.title}</p>
					<h2 class="text-5xl font-extralight text-gray-900 tracking-tight max-w-lg">
						{$currentLanguage === 'de' ? translations.de.contact.subtitle : translations.en.contact.subtitle}
					</h2>
				</div>

				<div class="space-y-8">
					<p class="text-gray-600 leading-relaxed font-light max-w-md">
						{$currentLanguage === 'de' ? translations.de.contact.description : translations.en.contact.description}
					</p>

					<div class="space-y-6">
						{#each contactMethods as method}
							<div class="group">
								<div class="flex items-start gap-4">
									<div class="flex-shrink-0 mt-1">
										<div class="w-1 h-1 bg-gray-400 rounded-full"></div>
									</div>
									<div class="min-w-0 flex-1 space-y-1">
										<span class="text-sm text-gray-500 font-light">{method.type}</span>
										<a 
											href={method.type === 'Email' ? `mailto:${method.value}` : 
											      method.type === 'Telefon' ? `tel:${method.value}` : 
											      `https://linkedin.com${method.value}`}
											class="text-gray-900 hover:text-gray-700 transition-colors font-mono text-sm block"
										>
											{method.value}
										</a>
										<p class="text-gray-500 text-xs font-light">
											{method.description}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Privacy Note -->
				<div class="pt-8 border-t border-gray-100">
					<p class="text-gray-500 text-xs leading-relaxed font-light">
						<strong class="text-gray-700">{$currentLanguage === 'de' ? translations.de.contact.privacy.title : translations.en.contact.privacy.title}</strong> 
						{$currentLanguage === 'de' ? translations.de.contact.privacy.text : translations.en.contact.privacy.text}
					</p>
				</div>
			</div>

			<!-- Visual Column -->
			<div class="relative">
				<!-- Connection visualization -->
				<div class="relative w-full h-80 flex items-center justify-center">
					<svg viewBox="0 0 300 300" class="w-full h-full opacity-30">
						<!-- Central node -->
						<circle 
							cx="150" 
							cy="150" 
							r="2" 
							fill="#6b7280"
							class="animate-pulse"
						/>

						<!-- Connection nodes -->
						{#each Array(6) as _, i}
							<g>
								<line 
									x1="150" 
									y1="150"
									x2={150 + 60 * Math.cos(i * Math.PI / 3)}
									y2={150 + 60 * Math.sin(i * Math.PI / 3)}
									stroke="#9ca3af"
									stroke-width="0.5"
									opacity="0.7"
								/>
								<circle 
									cx={150 + 60 * Math.cos(i * Math.PI / 3)}
									cy={150 + 60 * Math.sin(i * Math.PI / 3)}
									r="1" 
									fill="#9ca3af"
									class="animate-pulse"
									style="animation-delay: {i * 300}ms"
								/>
							</g>
						{/each}

						<!-- Outer ring -->
						{#each Array(12) as _, i}
							<circle 
								cx={150 + 100 * Math.cos(i * Math.PI / 6)}
								cy={150 + 100 * Math.sin(i * Math.PI / 6)}
								r="0.5" 
								fill="#d1d5db"
								class="animate-pulse"
								style="animation-delay: {i * 150}ms"
							/>
						{/each}
					</svg>
				</div>

				<!-- Floating elements -->
				<div class="absolute top-8 right-4 text-gray-300 font-mono text-xs">
					DSGVO-konform
				</div>
				<div class="absolute bottom-12 left-8 text-gray-300 font-mono text-xs">
					End-to-End verschlüsselt
				</div>
			</div>
		</div>
	</div>
</section>
