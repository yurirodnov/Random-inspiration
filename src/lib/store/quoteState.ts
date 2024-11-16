import { writable } from 'svelte/store';

const defaultQuote: string = "The future depends on what you do today";
const defaultAuthor: string = "Mahatma Gandhi"


export const quoteState = writable<string>(defaultQuote)
export const authorState = writable<string>(defaultAuthor)


export const setQuote = (data: any) => {
  quoteState.set(data[0].q)
  authorState.set(data[0].a)
}