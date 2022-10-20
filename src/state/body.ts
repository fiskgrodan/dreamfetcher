import { writable } from "svelte/store";

export const body = writable(`{
  "content-type": "application/json"
}`);
