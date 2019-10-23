<script>
    import { createEventDispatcher } from 'svelte';
    export let message = 'Hello!';
    const dispatch = createEventDispatcher();

    /**
     * Dispatch the event
     */
    function handleClick() {
        dispatch('message', {
            text: message,
        });
    }
</script>

<style>
    button {
        padding: 10px;
        font-size: 25px;
        background-color: #333;
        color: #fff;
        border-radius: 10px;
    }
</style>

<button on:click={handleClick}>
    <slot>Click Me!</slot>
</button>
