import { writable } from 'svelte/store';

const defaultQuote = "The future depends on what you do today";
const defaultAuthor = "Mahatma Gandhi"

export const quoteState = writable<string>(defaultQuote)
export const authorState = writable<string>(defaultAuthor)

// export functions to access or mutate user
export const setQuote = (data: any) => {
  console.log(data[0].q)
  quoteState.set(data[0].q)
  console.log(data[0].a)
  authorState.set(data[0].a)
}