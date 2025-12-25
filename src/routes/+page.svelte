<script lang="ts">
  import { base } from "$app/paths";
</script>

<section class="hero">
  <img
    class="avatar"
    src="{base}/philip-face.png"
    alt="Philip Knott"
    width="240"
    height="240"
  />
  <h2>Philip Knott</h2>
</section>

<style>
  .hero {
    display: grid;
    place-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  .avatar {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 999px;
  }

  h2 {
    margin: 0;
  }
</style>
