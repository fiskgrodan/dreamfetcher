<script>
  import Request from "./view/request/Request.svelte";
  import Response from "./view/response/Response.svelte";
</script>

<main>
  <div><Request /></div>
  <div><Response /></div>
</main>

<style>
  main {
    display: flex;
    max-width: 1600px;
    margin: auto;
  }

  div {
    flex-grow: 1;
    flex-shrink: 0;
    width: 50%;
  }
</style>
