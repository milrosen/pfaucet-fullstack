<script lang="ts">
	import PocketBase from 'pocketbase';
	import { PUBLIC_DEV_DATABASE_IP, PUBLIC_PROD_DATABASE_IP } from '$env/static/public';

	const pb = new PocketBase(
		`http://${
			import.meta.env.MODE == 'production' ? PUBLIC_PROD_DATABASE_IP : PUBLIC_DEV_DATABASE_IP
		}:8090`
	);

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
