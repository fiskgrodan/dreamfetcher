<script lang="ts">
  import { tick } from "svelte";
  import type { Writable } from "svelte/store";

  export let store: Writable<string>;
  let textarea: HTMLTextAreaElement | null = null;

  $: minheight = $store.split("\n").length * 24;

  const keydown = async (event: KeyboardEvent): Promise<void> => {
    if (!textarea) return;
    if (event.key !== "Tab") return;

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = textarea;
    console.log({ selectionStart, selectionEnd, value });

    store.set(
      `${value.slice(0, selectionStart)}  ${value.slice(selectionEnd)}`
    );

    await tick();
    textarea.selectionStart = selectionStart + 2;
    textarea.selectionEnd = selectionStart + 2;
  };
</script>

<textarea
  spellcheck="false"
  autocorrect="off"
  autocapitalize="off"
  style={`min-height: ${minheight}px;`}
  bind:this={textarea}
  on:keydown={keydown}
  bind:value={$store}
/>

<style>
  textarea {
    font-family: "Roboto MonoVariable", monospace;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: white;
    background-color: black;

    border: none;
    outline: none;
    resize: none;

    width: 100%;
  }
</style>
