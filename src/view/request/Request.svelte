<script>
  import Endpoint from "./Endpoint.svelte";
  import Body from "./Body.svelte";
  import Tab from "../../components/Tab.svelte";

  let current = "body";
</script>

<section>
  <Endpoint />
  <div class="tabs">
    <Tab active={current === "body"} on:click={() => (current = "body")}
      >body</Tab
    >
    <Tab active={current === "headers"} on:click={() => (current = "headers")}
      >headers</Tab
    >
    <Tab active={current === "jwt"} on:click={() => (current = "jwt")}>jwt</Tab>
  </div>
  {#if current === "body"}
    <Body />
  {/if}
  {#if current === "headers"}
    <div>Headers</div>
  {/if}
  {#if current === "jwt"}
    <div>JWT</div>
  {/if}
</section>

<style>
  section {
    box-sizing: border-box;
    padding: var(--spacing);
  }

  .tabs {
    display: flex;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
