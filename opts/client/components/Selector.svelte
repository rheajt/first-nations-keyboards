<script>
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import allLanguages from "../../../languages/index.js";
  import Storage from "../js/storage.js";
  import Save from "./Save.svelte";

  const installed = Storage.read();
  const languages = Object.keys(allLanguages).map(key => ({
    id: key,
    installed: installed.languages.includes(key),
    name: key
  }));

  const [send, receive] = crossfade({
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });

  function remove(todo) {
    todos = todos.filter(t => t !== todo);
  }

  function save() {
    const updated = languages
      .filter(lang => lang.installed)
      .map(lang => lang.name);
    Storage.save("languages", updated);
  }
</script>

<style>
  .board {
    max-width: 36em;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .column .content {
    border: 1px solid black;
    border-radius: 3px;
    height: 300px;
    padding: 1rem;
  }

  h2 {
    /* font-size: 2em;
    font-weight: 200; */
    user-select: none;
  }

  label {
    top: 0;
    left: 0;
    display: block;
    font-size: 1em;
    line-height: 1;
    padding: 0.5em;
    margin: 0 auto 0.5em auto;
    border-radius: 2px;
    background-color: #eee;
    user-select: none;
    text-align: center;
    text-transform: uppercase;
  }

  input {
    margin: 0;
    display: none;
  }

  .installed {
    background-color: rgb(180, 240, 100);
  }

  button {
    float: right;
    height: 1em;
    box-sizing: border-box;
    padding: 0 0.5em;
    line-height: 1;
    background-color: transparent;
    border: none;
    color: rgb(170, 30, 30);
    opacity: 0;
    transition: opacity 0.2s;
  }

  label:hover button {
    opacity: 1;
  }
</style>

<div class="board">
  <div class="column">
    <h2>Languages</h2>
    <div class="content">
      {#each languages.filter(l => !l.installed) as lang (lang.id)}
        <label
          in:receive={{ key: lang.id }}
          out:send={{ key: lang.id }}
          animate:flip>
          <input type="checkbox" bind:checked={lang.installed} />
          {lang.name}
          <button on:click={() => remove(lang)}>x</button>
        </label>
      {/each}
    </div>
  </div>

  <div class="column">
    <h2>Installed</h2>
    <div class="content">
      {#each languages.filter(l => l.installed) as lang (lang.id)}
        <label
          class={lang.installed ? 'installed' : ''}
          in:receive={{ key: lang.id }}
          out:send={{ key: lang.id }}
          animate:flip>
          <input type="checkbox" bind:checked={lang.installed} />
          {lang.name}
          <button on:click={() => remove(lang)}>x</button>
        </label>
      {/each}
    </div>
  </div>
  <Save on:click={save}>Save</Save>
</div>
