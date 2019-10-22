<script context="module">
	import {GRAPHQL_QUERY_URL} from "../_variables";

	export async function preload({ params, query }) {
		const res = await this.fetch(GRAPHQL_QUERY_URL+`{stations{id, name}}`);
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
	export let stations;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>Stations</h1>

<ul>
	{#each stations as station}
		<li><a rel='prefetch' href='stations/{station.id}'>{station.name}</a></li>
	{/each}
</ul>