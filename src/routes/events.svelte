<script>
	import Nested from '../components/Nested.svelte';

	/**
	 * Listener that handles the event message after the button click
	 * @param {Object} event
	 */
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<h1>Events</h1>
<Nested on:message={handleMessage} />