<script>
  import Button from "../../components/Button.svelte";
  import { response } from "../../state/response";

  $: status = $response !== null ? $response.status : "";
  $: text = $response !== null ? $response.statusText : "";
  $: url = $response !== null ? $response.url : "";
</script>

<section>
  <div>{status}</div>
  <div>{text}</div>
  <div class="url">{url}</div>
  <div>
    <Button on:click={() => response.clear()}>Clear</Button>
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 20px;
  }

  .url {
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
