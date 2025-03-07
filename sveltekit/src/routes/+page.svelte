<script>
  import { page } from "$app/state";
  const form = page.data.entry.form[0];
</script>

<div class="w-1/2 mx-auto mt-40">
  {@html form.templateHtml}
  {@html form.templateJS}
</div>
