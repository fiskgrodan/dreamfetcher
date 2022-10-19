<script>
  import Button from "../../components/Button.svelte";
</script>

<section>
  <div class="url">https://www.google.com/teapot</div>
  <div><Button>Clear</Button></div>
</section>

<style>
  section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    gap: 20px;
  }

  .url {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
