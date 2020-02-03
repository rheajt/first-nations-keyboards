<script>
  import Storage from "./classes/Storage.js";
  import allLanguages from "../../languages";

  const installed = Storage.read();
  const languages = Object.keys(allLanguages);

  function activate(lang) {
    console.log(lang);
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
    margin: 1rem 0.5rem;
    border-radius: 3px;
    text-transform: uppercase;

    &:hover {
      background-color: lightgrey;
    }
  }
</style>

<div class="container">
  <ul>
    {#each languages as lang}
      <li on:click={() => activate(lang)}>{lang}</li>
    {/each}
    <hr />
    <li on:click={() => activate(null)}>Off</li>
  </ul>
</div>
