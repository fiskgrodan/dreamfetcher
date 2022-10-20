import { writable } from "svelte/store";

export const endpoint = writable("https://");

export const options = ["GET", "POST", "PUT", "PATCH", "DELETE"];
export const method = writable("GET");

export const headers = writable(`{
  "content-type": "application/json"
}`);

export const body = writable(`{
  
}`);

export const jwt = writable(``);

const send = () => {};
