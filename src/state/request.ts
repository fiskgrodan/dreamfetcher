import { writable, get } from "svelte/store";
import { response } from "./response";

export const endpoint = writable("https://www.boredapi.com/api/activity");

export const options = ["GET", "POST", "PUT", "PATCH", "DELETE"];
export const method = writable("GET");

export const headers = writable(`{
  "content-type": "application/json"
}`);

export const body = writable(`{
  
}`);

export const jwt = writable(``);

const getBody = () => (["GET"].includes(get(method)) ? undefined : get(body));

export const send = async () => {
  const fetchResponse = await fetch(get(endpoint), {
    method: get(method),
    headers: JSON.parse(get(headers)),
    body: getBody(),
  });

  response.set(fetchResponse);
};
