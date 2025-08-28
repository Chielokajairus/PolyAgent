<script lang="ts">
	import { onMount } from 'svelte';
	import GeodesicSphere3D from './GeodesicSphere3D.svelte';
	import { heroAnimations } from '$utils/animations';
	import { currentLanguage, translations } from '$utils/i18n';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
		
		// Initialize hero animations after a short delay
		setTimeout(() => {
			heroAnimations.textReveal(['.hero-title', '.hero-subtitle', '.hero-description']);
			heroAnimations.ctaReveal(['.hero-cta']);
		}, 300);
	});
</script>

<section class="relative min-h-[90vh] flex items-center justify-center">
	<div class="mx-auto max-w-6xl px-8 grid lg:grid-cols-2 gap-20 items-center">
		<!-- Content Column -->
		<div class="space-y-12">
			<div class="space-y-8">
				<h1 class="text-6xl lg:text-8xl font-extralight tracking-tight leading-[0.9]">
					<span class="block text-gray-900 hero-title">{$currentLanguage === 'de' ? translations.de.hero.title.line1 : translations.en.hero.title.line1}</span>
					<span class="block text-gray-500 text-5xl lg:text-6xl hero-subtitle">{$currentLanguage === 'de' ? translations.de.hero.title.line2 : translations.en.hero.title.line2}</span>
					<span class="block text-gray-900 hero-title">{$currentLanguage === 'de' ? translations.de.hero.title.line3 : translations.en.hero.title.line3}</span>
				</h1>
				
				<p class="text-lg text-gray-600 max-w-md leading-relaxed font-light hero-description">
					{$currentLanguage === 'de' ? translations.de.hero.description : translations.en.hero.description}
				</p>
			</div>

			<div class="flex items-center gap-12 text-sm font-light">
				<a 
					href="#cases" 
					class="group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300 hero-cta"
				>
					<span>{$currentLanguage === 'de' ? translations.de.hero.cta.learnMore : translations.en.hero.cta.learnMore}</span>
					<div class="w-4 h-px bg-gray-400 group-hover:w-6 transition-all duration-200"></div>
				</a>
				
				<a 
					href="#contact" 
					class="text-gray-500 hover:text-gray-700 transition-colors duration-300 hero-cta"
				>
					{$currentLanguage === 'de' ? translations.de.hero.cta.contact : translations.en.hero.cta.contact}
				</a>
			</div>
		</div>

		<!-- Geodesic Sphere Column -->
		<div class="relative flex items-center justify-center">
			<div class="relative w-[28rem] h-[28rem] {mounted ? 'animate-float' : ''} will-change-transform">
				<!-- 3D Geodesic Sphere -->
				<GeodesicSphere3D />
				
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
