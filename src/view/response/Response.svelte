<script>
  import Header from "./Header.svelte";
  import Tab from "../../components/Tab.svelte";
  import { fade } from "svelte/transition";
  import { response } from "../../state/response";

  let current = "body";
</script>

{#if $response !== null}
  <section in:fade={{ duration: 100 }}>
    <Header />
    <div class="tabs">
      <Tab active={current === "headers"} on:click={() => (current = "headers")}
        >headers</Tab
      >
      <Tab active={current === "body"} on:click={() => (current = "body")}
        >body</Tab
      >
    </div>
  </section>
{/if}

<style>
  section {
    box-sizing: border-box;
    padding: var(--spacing);
  }

  .tabs {
    display: flex;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
</style>
