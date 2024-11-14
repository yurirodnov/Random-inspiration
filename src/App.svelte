<script lang="ts">  
  import Header from './lib/ui/header/Header.svelte';
  import Body from './lib/ui/body/Body.svelte';  
</script>

<style>
  main {
    background-color: rgb(17, 17, 17);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

<main>
  <Header />
  <Body />  
</main>


