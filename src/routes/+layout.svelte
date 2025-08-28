<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { microInteractions } from '$utils/animations';
  import LanguageToggle from '$components/LanguageToggle.svelte';
  import { currentLanguage, translations } from '$utils/i18n';
  
  let mobileMenuOpen = false;
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  onMount(() => {
    // Add navigation hover effects
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        microInteractions.navHover(`#${link.id || 'nav-link'}`);
      });
      link.addEventListener('mouseleave', () => {
        microInteractions.navHoverOut(`#${link.id || 'nav-link'}`);
      });
    });
  });
</script>

<!-- Global layout shell for Poly-Agent -->
<div class="relative min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden selection:bg-gray-100">
  <!-- Paper texture background -->
  <div
    class="pointer-events-none absolute inset-0 opacity-30"
    style="
      background-image:
        radial-gradient(rgba(0,0,0,0.015) 1px, transparent 1px),
        linear-gradient(45deg, rgba(0,0,0,0.005) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(0,0,0,0.005) 25%, transparent 25%);
      background-size: 20px 20px, 40px 40px, 40px 40px;
      background-position: 0 0, 0 0, 20px 20px;
    "
  ></div>

  <!-- Minimal Top Navigation -->
  <header class="relative z-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-8 py-6 sm:py-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 sm:gap-4">
          <div class="w-6 h-6 sm:w-8 sm:h-8 border border-gray-900 flex items-center justify-center text-xs font-mono">
            P
          </div>
          <span class="text-base sm:text-lg font-light tracking-wide">Poly-Agent</span>
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-light">
          <a href="#cases" id="nav-cases" class="text-gray-600 hover:text-gray-900 transition-colors">{$currentLanguage === 'de' ? translations.de.nav.cases : translations.en.nav.cases}</a>
          <a href="#stack" id="nav-stack" class="text-gray-600 hover:text-gray-900 transition-colors">{$currentLanguage === 'de' ? translations.de.nav.stack : translations.en.nav.stack}</a>
          <a href="#contact" id="nav-contact" class="text-gray-600 hover:text-gray-900 transition-colors">{$currentLanguage === 'de' ? translations.de.nav.contact : translations.en.nav.contact}</a>
          <LanguageToggle />
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          on:click={toggleMobileMenu}
          class="md:hidden flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span class="text-xs font-mono">Menu</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      {#if mobileMenuOpen}
        <nav class="md:hidden mt-4 pb-4 border-t border-gray-100">
          <div class="flex flex-col gap-4 pt-4">
            <a href="#cases" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">{$currentLanguage === 'de' ? translations.de.nav.cases : translations.en.nav.cases}</a>
            <a href="#stack" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">{$currentLanguage === 'de' ? translations.de.nav.stack : translations.en.nav.stack}</a>
            <a href="#contact" class="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">{$currentLanguage === 'de' ? translations.de.nav.contact : translations.en.nav.contact}</a>
            <div class="pt-2">
              <LanguageToggle />
            </div>
          </div>
        </nav>
      {/if}
    </div>
  </header>

  <!-- Page content -->
  <main class="relative z-10">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="relative z-10 border-t border-gray-100 mt-16 sm:mt-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-8 py-8 sm:py-12 text-xs text-gray-400 font-light">
      {$currentLanguage === 'de' ? translations.de.footer : translations.en.footer}
    </div>
  </footer>
</div>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes pulse {
    0%, 100% { opacity: .18 }
    50% { opacity: .4 }
  }
</style>
