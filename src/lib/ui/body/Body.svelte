<script lang="ts">  
  import ButtonsWrapper from "../buttons/ButtonsWrapper.svelte";
  import CopyNotification from "../copy-notification/CopyNotification.svelte";
  import Quote from "./Quote.svelte";
</script>

<style>
  .body {    
    height: 100%;
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
  <CopyNotification />
</div>