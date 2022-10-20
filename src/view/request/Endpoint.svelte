<script>
  import Dropdown from "./method/Dropdown.svelte";
  import Input from "../../components/Input.svelte";
  import Button from "../../components/Button.svelte";
  import { endpoint } from "../../state/endpoint";
</script>

<div>
  <Input bind:value={$endpoint} />
  <Button>Send</Button>
  <Dropdown />
</div>

<style>
  div {
    display: flex;
    gap: 20px;
  }
</style>
