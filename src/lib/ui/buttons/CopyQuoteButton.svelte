<script>  
  import { copyQuote } from "../../features/copyQuote";
  import { triggerNotification } from "../../store/notificationState";
  

  const handleCopyClick = () => {        
    copyQuote();
    triggerNotification();
    
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

