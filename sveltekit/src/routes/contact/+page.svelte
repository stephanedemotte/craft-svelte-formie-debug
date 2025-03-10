<script>
  import { page } from "$app/state";
  const forms = page.data.entry.form;
</script>

<a href="/">home</a>

{#each forms as form}
  <div class="w-1/2 mx-auto mt-40">
    {@html form.templateHtml}
    {@html form.templateJs}
  </div>
{/each}
