<script>
  import Header from "./components/Header";
  import Selector from "./components/Selector.svelte";

  function save() {
    console.log("save");
  }
</script>

<style lang="scss">
  :global(html, body) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .container {
    margin: 0 auto;
  }
</style>

<Header />
<div class="container">
  <Selector />
</div>
