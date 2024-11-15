<script>
  import { copyNotificationState } from "../../store/notificationState";
  import { get } from "svelte/store"; 

  const notificationCondition = get(copyNotificationState);
</script>

<style>
  .quote-notification {
    
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 10px;
    border: 2px solid white;
    color: white;
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
  }

</style>



<div class="quote-notification" style="display: {notificationCondition ? "flex" : "none"}">Copied</div>