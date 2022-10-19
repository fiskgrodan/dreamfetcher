<script>
  export let disabled = false;
</script>

<button class:disabled on:click><slot /></button>

<style>
  button {
    background-color: black;
    color: white;
    outline: none;
    user-select: none;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .disabled {
    border: 1px solid #666;
    color: #666;
    cursor: auto;
  }
</style>
