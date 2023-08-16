<script lang="js">
	import PocketBase from 'pocketbase';
	import { PUBLIC_DATABASE_IP } from '$env/static/public';

	const db_ip = import.meta.env.PROD ? PUBLIC_DATABASE_IP : 'localhost';

	const pb = new PocketBase(db_ip);

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
