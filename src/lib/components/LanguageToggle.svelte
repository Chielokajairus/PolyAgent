<script lang="ts">
	import { currentLanguage, toggleLanguage } from '$utils/i18n';
	import { gsap } from 'gsap';
	
	let buttonElement: HTMLButtonElement;
	let isAnimating = false;
	
	function handleToggle() {
		if (isAnimating) return;
		
		isAnimating = true;
		
		// Animate the toggle
		gsap.to(buttonElement, {
			scale: 0.95,
			duration: 0.1,
			ease: 'power2.out',
			onComplete: () => {
				toggleLanguage();
				
				gsap.to(buttonElement, {
					scale: 1,
					duration: 0.1,
					ease: 'power2.out',
					onComplete: () => {
						isAnimating = false;
					}
				});
			}
		});
	}
</script>

<button
	bind:this={buttonElement}
	on:click={handleToggle}
	class="group relative flex items-center gap-2 px-3 py-2 text-xs font-mono text-gray-600 hover:text-gray-900 transition-colors duration-300 border border-gray-200 hover:border-gray-300 rounded-lg"
	title="Toggle language / Sprache wechseln"
>
	<!-- Language indicator -->
	<div class="flex items-center gap-1">
		<span class="font-medium">{$currentLanguage === 'de' ? 'DE' : 'EN'}</span>
		<svg class="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
		</svg>
	</div>
	
	<!-- Flag indicator -->
	<div class="w-4 h-3 rounded-sm overflow-hidden border border-gray-200">
		{#if $currentLanguage === 'de'}
			<!-- German flag -->
			<div class="w-full h-full bg-gradient-to-b from-black via-red-500 to-yellow-400"></div>
		{:else}
			<!-- English flag -->
			<div class="w-full h-full bg-gradient-to-b from-blue-600 via-white to-red-600 relative">
				<div class="absolute inset-0 bg-red-600 opacity-20"></div>
			</div>
		{/if}
	</div>
</button>

<style>
	button:focus {
		outline: none;
		box-shadow: 0 0 0 2px #3b82f6;
	}
</style>
