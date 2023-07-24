<script lang="ts">
	import PocketBase from 'pocketbase';

	const pb = new PocketBase('http://127.0.0.1:8090');

	async function startPocketBase() {
		const result = await pb.collection('test').getFullList();
		return result[0].test_field;
	}

	let data = startPocketBase();
</script>

{#await data}
	<h1>..loading</h1>
{:then data}
	<h1>{data}</h1>
{:catch}
	<h1>theres been an error, mad cuz bad, skill issue</h1>
{/await}
