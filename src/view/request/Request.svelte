<script>
  import Endpoint from "./Endpoint.svelte";
  import Tab from "../../components/Tab.svelte";
  import Textarea from "../../components/Textarea.svelte";
  import { body } from "../../state/body";
  import { headers } from "../../state/headers";
  import { jwt } from "../../state/jwt";

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
    <Textarea store={body} />
  {/if}
  {#if current === "headers"}
    <Textarea store={headers} />
  {/if}
  {#if current === "jwt"}
    <Textarea store={jwt} />
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
    padding-bottom: 20px;
  }
</style>
