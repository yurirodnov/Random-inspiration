<script lang="ts">
  import { get } from "svelte/store";
  import { copyNotificationState } from "../../store/notificationState";
  
  
  
</script>

<style>
  .quote-notification {    
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 10px;    
    color: white;
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
  }

</style>




{#if $copyNotificationState}
  <div class="quote-notification">Copied</div>
{/if}