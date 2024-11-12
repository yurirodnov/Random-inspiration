<script>
  import { quoteState } from "../../store/store";
  import { getQuote } from "../../api/getQuote";

</script>


<div class="quotes">
	<button on:click={getQuote}>Get quote!</button>
  <p>{quoteState?.quote}</p>
</div>