<script lang="ts">
  import '../app.css';
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
    <div class="mx-auto max-w-6xl px-8 py-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-4">
          <div class="w-8 h-8 border border-gray-900 flex items-center justify-center text-xs font-mono">
            P
          </div>
          <span class="text-lg font-light tracking-wide">Poly-Agent</span>
        </a>
        
        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-12 text-sm font-light">
          <a href="#cases" class="text-gray-600 hover:text-gray-900 transition-colors">Cases</a>
          <a href="#stack" class="text-gray-600 hover:text-gray-900 transition-colors">Stack</a>
          <a href="#contact" class="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Page content -->
  <main class="relative z-10">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="relative z-10 border-t border-gray-100 mt-32">
    <div class="mx-auto max-w-6xl px-8 py-12 text-xs text-gray-400 font-light">
      © {new Date().getFullYear()} Poly-Agent — Automation & Workflow Optimization
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
