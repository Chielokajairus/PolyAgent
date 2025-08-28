<script lang="ts">
	const cases = [
		{
			id: '01',
			title: 'Manufacturing Workflow',
			subtitle: 'Produktionsautomatisierung',
			description: 'Vollständige Digitalisierung der Fertigungsprozesse mit DSGVO-konformer Datenverarbeitung und 40% Effizienzsteigerung.',
			metrics: ['40% Effizienzsteigerung', 'DSGVO-konforme Umsetzung', '24/7 Monitoring'],
			tags: ['Manufacturing', 'IoT', 'Compliance']
		},
		{
			id: '02',
			title: 'Financial Data Pipeline',
			subtitle: 'Finanzprozess-Optimierung',
			description: 'Automatisierte Datenverarbeitung mit End-to-End-Verschlüsselung und regulatorischer Compliance für Finanzdienstleister.',
			metrics: ['99.9% Verfügbarkeit', 'End-to-End Verschlüsselung', 'BaFin-konform'],
			tags: ['Finance', 'Security', 'Compliance']
		},
		{
			id: '03',
			title: 'Healthcare Integration',
			subtitle: 'Medizin-Workflow',
			description: 'Sichere Patientendaten-Workflows mit höchsten Datenschutzstandards und nahtloser Systemintegration.',
			metrics: ['100% Datenschutz', 'HL7-kompatibel', '50% Zeitersparnis'],
			tags: ['Healthcare', 'Integration', 'Privacy']
		}
	];
</script>

<section id="cases" class="relative py-32">
	<div class="mx-auto max-w-6xl px-8">
		<!-- Section Header -->
		<div class="mb-24">
			<div class="space-y-6">
				<p class="text-xs font-mono text-gray-500 tracking-widest uppercase">Case Studies</p>
				<h2 class="text-5xl font-extralight text-gray-900 tracking-tight max-w-2xl">
					Vertrauen durch Transparenz
				</h2>
			</div>
		</div>

		<!-- Cases Grid -->
		<div class="grid lg:grid-cols-3 gap-12">
			{#each cases as caseStudy, index}
				<article class="group relative">
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
									<span class="font-light">{metric}</span>
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
