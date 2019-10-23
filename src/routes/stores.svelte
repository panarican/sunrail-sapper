<script context="module">
	import {GRAPHQL_QUERY_URL} from "./_variables";

	export async function preload({params, query}) {
		const res = await this.fetch(GRAPHQL_QUERY_URL + `{stations{id, name}}`);
		const data = await res.json();

		if (res.status === 200) {
			let stations = data.data.stations;
			return {stations};
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Dump from "../components/Dump.svelte";
	import {favorites} from '../stores/favorite-store';
	import Favorites from "../components/Favorites.svelte";
	export let stations;
</script>

<style>
	form {
		margin-bottom: 20px;
	}
	select {
		width: 100%;
		font-size: 16px;
	}
</style>

<svelte:head>
	<title>Stores</title>
</svelte:head>

<h1>Stores</h1>

<p>Please select some of your favorite stations.</p>
<form>
    <select multiple bind:value={$favorites}>
        {#each stations as station}
            <option value={station}>{station.name}</option>
        {/each}
    </select>
</form>

<Favorites />
