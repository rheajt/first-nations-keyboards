<style>
  .save-btn {
    font-size: 1.3rem;
    text-transform: uppercase;
    grid-column: span 2;
    border-radius: 3px;
    padding: 8px;
  }
</style>

<button on:click class="save-btn">
  <slot />
</button>
