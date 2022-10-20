import { writable } from "svelte/store";

export const headers = writable(`{
  "content-type": "application/json"
}`);
