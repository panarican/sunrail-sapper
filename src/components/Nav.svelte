<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class:selected={segment === undefined} href='.'>Home</a></li>
		<li><a class:selected={segment === 'forms'} href='forms'>Forms</a></li>
		<li><a class:selected={segment === 'events'} href='events'>Events</a></li>
		<li><a class:selected={segment === 'stores'} href='stores'>Stores</a></li>
		<li><a class:selected={segment === 'stations'} href='stations' rel='prefetch'>Stations</a></li>
	</ul>
</nav>
