import { quoteState, authorState } from "../store/store";
import { get } from "svelte/store";

export const copyQuote = () => {

  const quoteFromState = get(quoteState)
  const authorFromState = get(authorState)
  const formattedQuote: string = `"${quoteFromState}" - ${authorFromState}`;

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(formattedQuote);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  copyContent();
}




