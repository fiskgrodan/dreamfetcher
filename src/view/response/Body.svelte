<script>
  import { data } from "../../state/response";

  $: formated = JSON.stringify($data, null, 2);
</script>

<div>{formated}</div>

<style>
  div {
    font-family: "Roboto MonoVariable", monospace;
    width: 100%;
    white-space: pre-wrap;
  }
</style>
