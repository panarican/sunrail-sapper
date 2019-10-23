<script>
    import {formatTime} from '../services/date-time-service.js';
    import {fade} from 'svelte/transition';
    import {slide} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
    export let title = 'Schedule';
    export let sorry = 'Sorry there\'s currently no scheduled stops for this location';
    export let times = [];
</script>

<style>
    table {
        border: 1px;
        width: 100%;
        border-collapse: collapse;
        text-align: left;
    }

    th {
        background-color: #333;
        border: 1px solid #333;
        color: #fff;
    }

    td {
        border: 1px solid #ccc;
    }

    td, th {
        padding: 10px;
    }
</style>

<h2 transition:slide="{{delay: 200, duration: 300, easing: quintOut }}">{title}</h2>
{#if times.length}
    <table transition:fade="{{delay: 250, duration: 300}}">
        <tr>
            <th>Time</th>
            <th>Train</th>
        </tr>
        {#each times as item, index}
            <tr transition:fade="{{delay: 500 + (index * 50), duration: 300, easing: quintOut}}"> 
                <td>{formatTime(item.time)}</td>
                <td>{item.train}</td>
            </tr>
        {/each}
    </table>
{:else}
    <p>{sorry}</p>
{/if}
