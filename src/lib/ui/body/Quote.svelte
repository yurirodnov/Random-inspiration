<script>
  import { quoteState, authorState } from "../../store/store";
</script>

<style>
  .quote-block {
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px
  }

  .quote {
    color: rgb(255, 255, 255);
    font-size: 2em;
  }

  .author {
    color: rgb(162, 162, 162);
    font-size: 1.5em;
  }

</style>


<div class="quote-block">
  <div class="quote">{$quoteState}</div>
  <div class="author">{$authorState}</div>
</div>