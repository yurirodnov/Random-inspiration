<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";

  const quoteApiURL: string = "/random";
  

  onMount(() => {
    axios.get(quoteApiURL)
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  });



</script>