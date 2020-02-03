import Options from './Options.svelte';

const app = new Options({
  target: document.body,
});

window.app = app;

export default app;
