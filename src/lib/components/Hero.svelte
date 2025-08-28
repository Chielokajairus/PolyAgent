<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	let sphereContainer: HTMLDivElement;
	
	onMount(() => {
		mounted = true;
	});
</script>

<section class="relative min-h-[90vh] flex items-center justify-center">
	<div class="mx-auto max-w-6xl px-8 grid lg:grid-cols-2 gap-20 items-center">
		<!-- Content Column -->
		<div class="space-y-12">
			<div class="space-y-8">
				<h1 class="text-6xl lg:text-8xl font-extralight tracking-tight leading-[0.9]">
					<span class="block text-gray-900">Automation</span>
					<span class="block text-gray-500 text-5xl lg:text-6xl">mit</span>
					<span class="block text-gray-900">Datenschutz-DNA</span>
				</h1>
				
				<p class="text-lg text-gray-600 max-w-md leading-relaxed font-light">
					Intelligente Workflow-Optimierung für Unternehmen, 
					die Effizienz und Compliance gleichzeitig ernst nehmen.
				</p>
			</div>

			<div class="flex items-center gap-12 text-sm font-light">
				<a 
					href="#cases" 
					class="group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
				>
					<span>Mehr erfahren</span>
					<div class="w-4 h-px bg-gray-400 group-hover:w-6 transition-all duration-200"></div>
				</a>
				
				<a 
					href="#contact" 
					class="text-gray-500 hover:text-gray-700 transition-colors duration-300"
				>
					Kontakt
				</a>
			</div>
		</div>

		<!-- Geodesic Sphere Column -->
		<div class="relative flex items-center justify-center" bind:this={sphereContainer}>
			<div class="relative w-80 h-80">
				<!-- Floating sphere container -->
				<div class="absolute inset-0 {mounted ? 'animate-float' : ''} will-change-transform">
					<!-- Geodesic Sphere SVG -->
					<svg 
						viewBox="0 0 400 400" 
						class="w-full h-full"
						xmlns="http://www.w3.org/2000/svg"
					>
						<!-- Geodesic sphere paths -->
						<g transform="translate(200,200)" stroke="#1f2937" stroke-width="0.8" fill="none" opacity="0.7">
							<!-- Main icosahedron structure -->
							{#each Array(20) as _, i}
								<g class="animate-pulse-slow" style="animation-delay: {i * 150}ms">
									<!-- Triangular faces -->
									<path d="M {60 * Math.cos(i * Math.PI / 10)} {60 * Math.sin(i * Math.PI / 10)} 
									         L {80 * Math.cos((i + 2) * Math.PI / 10)} {80 * Math.sin((i + 2) * Math.PI / 10)}
									         L {50 * Math.cos((i + 4) * Math.PI / 10)} {50 * Math.sin((i + 4) * Math.PI / 10)} Z" />
								</g>
							{/each}
							
							<!-- Inner pentagon connections -->
							{#each Array(5) as _, i}
								<line 
									x1={35 * Math.cos(i * 2 * Math.PI / 5)} 
									y1={35 * Math.sin(i * 2 * Math.PI / 5)}
									x2={35 * Math.cos((i + 1) * 2 * Math.PI / 5)} 
									y2={35 * Math.sin((i + 1) * 2 * Math.PI / 5)}
									stroke="#374151"
									stroke-width="0.6"
									opacity="0.5"
								/>
							{/each}

							<!-- Connection nodes -->
							{#each Array(12) as _, i}
								<circle 
									cx={65 * Math.cos(i * Math.PI / 6)} 
									cy={65 * Math.sin(i * Math.PI / 6)} 
									r="1" 
									fill="#6b7280"
									opacity="0.8"
									class="animate-pulse"
									style="animation-delay: {i * 100}ms"
								/>
							{/each}

							<!-- Central connection point -->
							<circle cx="0" cy="0" r="1.5" fill="#1f2937" opacity="0.9"/>
						</g>
					</svg>
				</div>

				<!-- Subtle shadow -->
				<div class="absolute top-4 left-4 w-full h-full opacity-10">
					<div class="w-full h-full bg-gray-900 rounded-full blur-2xl"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { 
			transform: translateY(0px) rotate(0deg); 
		}
		33% { 
			transform: translateY(-12px) rotate(2deg); 
		}
		66% { 
			transform: translateY(-8px) rotate(-1deg); 
		}
	}
	
	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	
	@keyframes pulse-slow {
		0%, 100% { opacity: 0.3; }
		50% { opacity: 0.8; }
	}
	
	.animate-float {
		animation: float 8s ease-in-out infinite;
	}
	
	.animate-spin-slow {
		animation: spin-slow 60s linear infinite;
	}
	
	.animate-pulse-slow {
		animation: pulse-slow 4s ease-in-out infinite;
	}
</style>
