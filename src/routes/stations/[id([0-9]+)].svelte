<script context="module">
	import {GRAPHQL_QUERY_URL} from "../_variables";
	export async function preload({params, query}) {
		const QUERY = `{
			station(id:${params.id}) {
				id,
				name,
				details,
				schedules {
					time,
					train,
					direction_id,
					created_at
				}
			}
		}`;
		const res = await this.fetch(GRAPHQL_QUERY_URL + QUERY);
		const data = await res.json();

		if (res.status === 200) {
			let station = data.data.station;
			return {station};
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import ScheduleTable from '../../components/ScheduleTable.svelte';
	export let station;
	const north = {
		title: 'Northbound Schedule',
		times: station.schedules.filter(item => item.direction_id === 1),
	};
	const south = {
		title: 'Southbound Schedule',
		times: station.schedules.filter(item => item.direction_id === 2),
	};
</script>

<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.schedule-tables {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
	}
</style>

<svelte:head>
	<title>{station.name}</title>
</svelte:head>

<h1>{station.name}</h1>

<div class='content'>
	<p>{station.details}</p>
</div>

<div class="schedule-tables">
	<section>
		<ScheduleTable {...north} />
	</section>
	<section>
		<ScheduleTable {...south} />
	</section>
</div>