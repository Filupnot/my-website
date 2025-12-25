<script lang="ts">
  import "../lib/styles/global.css";
  import { base } from "$app/paths";

  const footerMarkdown = "github.com/filupnot";

  const renderFooter = (markdown: string) => {
    const trimmed = markdown.trim();
    const url = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
    return `<a href="${url}" target="_blank" rel="noreferrer">${trimmed}</a>`;
  };
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<main class="page">
  <header class="site-header">
    <nav class="nav">
      <a href="{base}/">Home</a>
      <a href="{base}/about">About</a>
    </nav>
  </header>

  <section class="content">
    <slot />
  </section>

  <footer class="site-footer">
    <div class="footer-content">
      {@html renderFooter(footerMarkdown)}
    </div>
  </footer>
</main>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .site-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #ddd;
  }

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
  }

  .site-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #ddd;
  }

  .nav {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 720px) {
    .site-header {
      padding: 0.75rem 1rem;
    }

    .content {
      padding: 1.5rem 1rem;
    }
  }
</style>
