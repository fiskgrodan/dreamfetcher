<script>
  import Dropdown from "./method/Dropdown.svelte";
  import Input from "../../components/Input.svelte";
  import Button from "../../components/Button.svelte";
</script>

<div>
  <Input />
  <Button>Send</Button>
  <Dropdown />
</div>

<style>
  div {
    display: flex;
    gap: 20px;
  }
</style>
