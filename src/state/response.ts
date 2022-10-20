import { writable } from "svelte/store";

export const data = writable("");

function createResponse({ data }) {
  const { subscribe, set } = writable<Response | null>(null);

  const clear = () => {
    set(null);
    data.set("");
  };

  return {
    subscribe,
    set,
    clear,
  };
}

export const response = createResponse({ data });
