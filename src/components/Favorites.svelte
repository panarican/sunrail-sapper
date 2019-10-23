<script>
    import { favorites } from '../stores/favorite-store';
</script>

{#if $favorites.length}
    <h1>Favorites</h1>
    <ul>
        {#each $favorites as favorite}
            <li><a rel='prefetch' href='stations/{favorite.id}'>{favorite.name}</a></li>
        {/each}
    </ul>
    <button on:click={favorites.reset}>Reset Favorites</button>
{/if}