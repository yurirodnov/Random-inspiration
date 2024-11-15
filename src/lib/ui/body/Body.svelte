<script lang="ts">  
  import ButtonsWrapper from "../buttons/ButtonsWrapper.svelte";
  import Quote from "./Quote.svelte";
</script>

<style>
  .body {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

</style>


<div class="body">
  <Quote />
  <ButtonsWrapper />
</div>