<script>
    export let data;
</script>

<style>
    pre {
        background-color: #eee;
        border-radius: 20px;
        padding: 20px;
    }
</style>

{#if data}
    <pre>
        {JSON.stringify(data, undefined, '\t')}
    </pre>
{/if}