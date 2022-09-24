<slot></slot>

<style>
  :root {
    --ease--in-out--back: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    
    --ease-out--cubic: cubic-bezier(0.22, 0.61, 0.36, 1);

    --color--bg: #FFEAA2;
    --color--text: #000;
  }

  :global(html) {
    background-color: var(--color--bg);
    color: var(--color--text);
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }
</style>