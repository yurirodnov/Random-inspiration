<script>
  import { quoteState, authorState } from "../../store/store";
  import { getQuote } from "../../api/getQuote";
  import { copyQuote } from "../../features/copyQuote";
</script>

<style>
  button {
    background-color: rgb(17, 17, 17);
    border-radius: 5px;
    border: none;
    color: white;
    width: 150px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 8px;
    font-size: 1.2em;
    border: 2px solid white;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(17, 17, 17);
  }
</style>

<button on:click={copyQuote}>Copy quote</button>

