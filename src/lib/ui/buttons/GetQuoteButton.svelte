<script>
  import { quoteState, authorState } from "../../store/store";
  import { getQuote } from "../../api/getQuote";
</script>


<div class="quotes">
	<button on:click={getQuote}>Get quote!</button>
  <p>{$quoteState}</p>
  <p>{$authorState}</p>
</div>