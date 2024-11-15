<script>
  import { quoteState, authorState } from "../../store/quoteState";
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
    height: 60px;
    font-size: 1.8em;
  }

  .author {
    color: rgb(162, 162, 162);
    font-size: 1.4em;
  }

</style>


<div class="quote-block">
  <div class="quote">{$quoteState}</div>
  <div class="author">{$authorState}</div>
</div>