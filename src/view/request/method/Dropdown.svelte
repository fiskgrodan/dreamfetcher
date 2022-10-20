<script>
  import { fade } from "svelte/transition";
  import { options, method } from "../../../state/request";

  let open = false;

  /** @type {(selected: string) => void} */
  const select = (selected) => {
    method.set(selected);
    open = false;
  };
</script>

<div class="wrapper">
  <div class="button" on:click={() => (open = !open)}>{$method}</div>

  {#if open}
    <div class="dropdown" transition:fade={{ duration: 200 }}>
      {#each options as option}
        <div
          class="option"
          class:selected={$method === option}
          on:click={() => select(option)}
        >
          {option}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    min-width: 100px;
  }

  .button {
    cursor: pointer;
    user-select: none;
  }

  .dropdown {
    position: absolute;
    top: 70px;
    background-color: black;
    border: 1px solid #666;
    padding: 10px 20px;
    border-radius: 5px;
  }

  .option {
    cursor: pointer;
    user-select: none;
    color: #666;
  }

  .option:hover {
    color: #999;
  }

  .selected {
    color: white;
  }
</style>
