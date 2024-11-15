<script>
  import CopyQuoteButton from "./CopyQuoteButton.svelte";
  import GetQuoteButton from "./GetQuoteButton.svelte";
</script>


<style>
  .buttons-wrapper {
    display: flex;
    gap: 30px;

  }

</style>

<div class="buttons-wrapper">
  <GetQuoteButton />
  <CopyQuoteButton />
</div>