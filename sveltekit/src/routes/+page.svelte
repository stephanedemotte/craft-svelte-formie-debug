<script>
  import { page } from "$app/state";
  const form = page.data.entry.form[0];

  console.log(form.templateJs);
</script>

<div class="w-1/2 mx-auto mt-40">
  {@html form.templateHtml}
</div>
<svelte:head>
  {@html form.templateJs}
</svelte:head>
