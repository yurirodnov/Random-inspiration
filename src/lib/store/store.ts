import { writable } from 'svelte/store';

export const quoteState = writable<{ quote: string }>({ quote: "Hello" })

// export functions to access or mutate user
export const setQuote = (data: any) => {
  quoteState.update(data)
}