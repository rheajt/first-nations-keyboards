<script>
  import Storage from "./js/storage.js";
  import allLanguages from "../../languages";

  const installed = Storage.read();

  function activate(lang) {
    Storage.save("active", lang);
  }
</script>

<style lang="scss">
  :global(html, body) {
    padding: 0;
    margin: 0;
  }
  .container {
    max-width: 400px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
  li {
    padding: 1rem;
    margin: 1rem;
    border-radius: 3px;
    &:hover {
      background-color: lightgrey;
    }
  }
</style>

<div class="container">
  <ul>
    {#each installed as lang}
      <li on:click={() => activate(lang)}>{lang}</li>
    {/each}
  </ul>
</div>
