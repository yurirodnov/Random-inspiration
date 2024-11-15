import axios from "axios";
import { setQuote } from "../store/quoteState";

const quoteApiURL: string = "/random";

export const getQuote = async () => {
  try {
    const response = await axios.get(quoteApiURL);
    setQuote(response.data)
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
}



