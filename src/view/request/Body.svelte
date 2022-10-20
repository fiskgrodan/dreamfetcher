<script lang="ts">
  import { tick } from "svelte";
  import { body } from "../../state/body";

  async function keydown(event: KeyboardEvent): Promise<void> {
    if (event.key !== "Tab") return;

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = this as HTMLTextAreaElement;
    console.log({ selectionStart, selectionEnd, value });

    body.set(`${value.slice(0, selectionStart)}  ${value.slice(selectionEnd)}`);

    await tick();
    this.selectionStart = selectionStart + 2;
    this.selectionEnd = selectionStart + 2;
  }
</script>

<textarea on:keydown={keydown} bind:value={$body} />

<style>
  textarea {
    width: 100%;
    min-height: 100vh;
    font-size: 18px;
  }
</style>
