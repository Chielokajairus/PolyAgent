<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '$components/Hero.svelte';
	import CaseStudies from '$components/CaseStudies.svelte';
	import TechStack from '$components/TechStack.svelte';
	import Contact from '$components/Contact.svelte';
	import { pageTransitions } from '$utils/animations';
	
	onMount(() => {
		// Fade in page content
		pageTransitions.fadeInPage();
	});
</script>

<svelte:head>
	<title>Poly-Agent — Automation mit Datenschutz-DNA</title>
	<meta name="description" content="Intelligente Workflow-Optimierung für Unternehmen, die Effizienz und Compliance gleichzeitig ernst nehmen." />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- Hero Section -->
<Hero />

<!-- Divider -->
<div class="relative py-16">
	<div class="absolute inset-0 flex items-center">
		<div class="w-full border-t border-gray-100"></div>
	</div>
	<div class="relative flex justify-center">
		<div class="bg-white px-4">
			<div class="w-1 h-1 bg-gray-300 rounded-full"></div>
		</div>
	</div>
</div>

<!-- Case Studies Section -->
<CaseStudies />

<!-- Divider -->
<div class="relative py-16">
	<div class="absolute inset-0 flex items-center">
		<div class="w-full border-t border-gray-100"></div>
	</div>
	<div class="relative flex justify-center">
		<div class="bg-white px-4">
			<div class="w-1 h-1 bg-gray-300 rounded-full"></div>
		</div>
	</div>
</div>

<!-- Tech Stack Section -->
<TechStack />

<!-- Divider -->
<div class="relative py-16">
	<div class="absolute inset-0 flex items-center">
		<div class="w-full border-t border-gray-100"></div>
	</div>
	<div class="relative flex justify-center">
		<div class="bg-white px-4">
			<div class="w-1 h-1 bg-gray-300 rounded-full"></div>
		</div>
	</div>
</div>

<!-- Contact Section -->
<Contact />