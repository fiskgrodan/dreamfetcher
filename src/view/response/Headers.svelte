<script>
  import { response } from "../../state/response";

  $: headers = response ? [...$response.headers] : [];
</script>

<div class="headers">
  {#each headers as header}<div>{header[0]}: {header[1]}</div>{/each}
</div>

<style>
  div {
    font-family: "Roboto MonoVariable", monospace;
    width: 100%;
  }
</style>
