<svelte:head>
	<title>Get</title>
</svelte:head>

<script lang="ts">
	let data = null;
	let store = null;
const getFromRoute = async () => {
	console.log('getFromRoute!');
	const response = await fetch('apiroute');
	store = await response.json();
}

const getFromExpress = async () => {
	console.log('getFromExpress!');
	const response = await fetch('api');
	data = await response.json();

}
</script>

<style>
.sibling {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>

<h1>Get page</h1>


<div class="sibling">
  <div>
	<button on:click={getFromRoute}>Get from Store via Server Route</button>
	<hr>
	<h2>Server Store Data</h2>
	{#if store}
	<pre>{JSON.stringify(store, null, 2)}</pre>
	{:else}
	<h4>No DATA</h4>
	{/if}
	</div>
	<div>
	<button on:click={getFromExpress}>Get from SQLite via Express</button>
	<hr>
	<h2>Express Data</h2>
	{#if data}
	<pre>{JSON.stringify(data, null, 2)}</pre>
	{:else}
	<h4>No DATA</h4>
	{/if}
	</div>
</div>
