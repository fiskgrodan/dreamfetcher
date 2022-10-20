import { writable } from "svelte/store";

function createResponse() {
  const { subscribe, set } = writable<Response | null>(null);

  const clear = () => set(null);

  return {
    subscribe,
    set,
    clear,
  };
}

export const response = createResponse();
