<script lang="ts">
	import { onMount } from "svelte";

  export let words: Array<string | string[]> = []

  const wordDurationMs = 5000
  let activeIndex = 0
  
  onMount(() => {
    const intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % words.length
    }, wordDurationMs);

    return () => {
      clearInterval(intervalId);
    }
  })

</script>

<h1>
  {#each words as word, index}
    <span
      class:word
      class:active={index === activeIndex}
      class:disappearing={index === ((words.length + (activeIndex - 1)) % words.length)}
    >
      {#each (typeof word === 'string' ? Array.from(word) : word) as letter, letterIndex}
        <span
          class="letter"
          style:--item-easing-t={Math.pow(letterIndex / (word.length - 1), 3)}
        >{@html letter === ' ' ? '&nbsp;' : letter}</span>
      {/each}
    </span>
  {/each}
</h1>

<style lang="scss">
  h1 {
    font-size: 17.5vw;
    position: relative;
  }

  .word {
    position: absolute;

    .letter {
      --transition-duration: 450ms;
      --transition-delay--enter--base: 250ms; 
      --transition-delay--item--base: 90ms;
      --transition-delay--base: 0ms;
      --transition-delay--item: 0ms;
      --transition-delay: calc(var(--transition-delay--base) + var(--transition-delay--item));

      --transform--translate-y: 0.1em;


      --easing: var(--ease--in-out--back);
      
      display: inline-block;
      opacity: 0;
      transform: translateY(calc(-1 * var(--transform--translate-y)));
      transition-delay: var(--transition-delay);
      transition-duration: var(--transition-duration);
      transition-property: opacity, transform;
      transition-timing-function: var(--easing);
      
      @for $i from 1 to 20 {
        &:nth-child(#{$i}) {
          --transition-delay--item: calc(var(--transition-delay--item--base) * #{$i});
          /* --transition-delay--item: calc(var(--transition-delay--item--base) * #{$i} * var(--item-easing-t)); */
        }
      }
    }

    &.active {
      .letter {
        opacity: 1;
        transform: none;

        @for $i from 1 to 20 {
          &:nth-child(#{$i}) {
            --transition-delay--base: var(--transition-delay--enter--base);
            --transition-delay--item: calc(var(--transition-delay--item--base) * #{$i});
            /* --transition-delay--item: calc(var(--transition-delay--item--base) * #{$i} * var(--item-easing-t)); */
          }
        }
      }
    }
    
    &.disappearing {
      .letter {
        transform: translateY(var(--transform--translate-y));
      }
    }
  }
</style>