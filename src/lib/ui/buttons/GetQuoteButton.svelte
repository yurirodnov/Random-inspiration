<script>  
  import { getQuote } from "../../api/getQuote";
</script>

<style>
  button {
    background-color: white;
    border-radius: 5px;
    border: none;
    color: black;
    width: 150px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    font-size: 1.2em;
  }

  button:hover {
    cursor: pointer;
    background-color: rgb(204, 204, 204);
  }
</style>

<button on:click={getQuote}>New quote</button>

