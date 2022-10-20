import { writable, derived, get } from "svelte/store";
import { response, data } from "./response";

export const endpoint = writable("https://www.boredapi.com/api/activity");

export const options = ["GET", "POST", "PUT", "PATCH", "DELETE"];
export const method = writable("GET");

export const headers = writable(`{
  "content-type": "application/json"
}`);

export const body = writable(`{
  
}`);

export const jwt = writable("");

const combinedHeaders = derived([headers, jwt], ([headers, jwt]) => {
  const combined = JSON.parse(headers);
  if (jwt !== "") {
    combined["Authorization"] = `Bearer ${jwt}`;
  }
  return combined;
});

export const send = async () => {
  const fetchResponse = await fetch(get(endpoint), {
    method: get(method),
    headers: get(combinedHeaders),
    body: ["GET"].includes(get(method)) ? undefined : get(body),
  });
  const json = await fetchResponse.json();

  response.set(fetchResponse);
  data.set(json);
};
