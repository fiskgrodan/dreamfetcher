import { writable } from "svelte/store";

export const options = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export const method = writable("GET");
