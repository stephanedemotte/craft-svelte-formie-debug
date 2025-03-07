<script>
  import { page } from "$app/state";
  const forms = page.data.entry.form;
</script>

<svelte:head>
  {#each forms as form}
    {@html form.templateJs}
  {/each}
</svelte:head>

{#each forms as form}
  <div class="w-1/2 mx-auto mt-40">
    {@html form.templateHtml}
  </div>
{/each}
