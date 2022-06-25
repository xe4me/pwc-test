/*
 * @Function fetcher
 * This is a wrapper around the browser's fetch function, required by SNW library
 * */
// @ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
