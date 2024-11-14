import { writable } from 'svelte/store';

export const quoteState = writable<string>("Hello")
export const authorState = writable<string>("World")

// export functions to access or mutate user
export const setQuote = (data: any) => {
  console.log(data[0].q)
  quoteState.set(data[0].q)
  console.log(data[0].a)
  authorState.set(data[0].a)
}