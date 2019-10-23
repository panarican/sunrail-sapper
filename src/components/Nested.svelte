<script>
    import ButtonEvent from "./ButtonEvent.svelte";
</script>

<style>
    .nested {
        padding: 30px;
        background-color: #ddd;
        border: 1px solid #333;
        border-radius: 10px;
    }
</style>

<div class="nested">
    <p>Let's try dispatching events in Svelte!</p>
    <ButtonEvent message='Over 9000!' on:message>What's my power level?</ButtonEvent>
</div>