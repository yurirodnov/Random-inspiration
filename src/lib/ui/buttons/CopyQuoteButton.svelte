<script>  
  import { copyQuote } from "../../features/copyQuote";
  import { triggerNotification } from "../../store/notificationState";
  import { copyNotificationState } from "../../store/notificationState";
  import { get } from "svelte/store"; 
  const isVisible = get(copyNotificationState)

  const handleCopyClick = () => { 
    console.log(isVisible)   
    copyQuote();
    triggerNotification();
    console.log(isVisible)
  }

</script>

<style>
  button {
    background-color: rgb(17, 17, 17);
    border-radius: 5px;
    border: none;
    color: white;
    width: 150px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 8px;
    font-size: 1.2em;
    border: 2px solid white;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(17, 17, 17);
  }
</style>

<button on:click={handleCopyClick}>Copy quote</button>

