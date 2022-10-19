<script>
  export let active = false;
</script>

<button class:active on:click><slot /></button>

<style>
  button {
    background-color: black;
    color: #666;
    outline: none;
    user-select: none;
    border: 1px solid #666;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    min-width: 80px;
    transition: border linear 200ms 0ms, color linear 200ms 0ms;
  }

  button:not(.active):hover {
    border: 1px solid #999;
    color: #999;
  }

  .active {
    border: 1px solid white;
    color: white;
  }
</style>
