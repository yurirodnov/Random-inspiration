import { writable } from 'svelte/store';

export const quoteState = writable<{ quote: string }>({ quote: "Hello" })
export const authorState = writable<{ author: string }>({ author: "World" })

// export functions to access or mutate user
export const setQuote = (data: any) => {
  console.log(data[0].q)
  quoteState.set(data[0].q)
  console.log(data[0].a)
  authorState.set(data[0].a)
}