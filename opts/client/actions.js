import Actions from './Actions.svelte';

const app = new Actions({
  target: document.body,
});

window.app = app;

export default app;
