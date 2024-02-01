<script lang="ts">
	import { goto } from '$app/navigation';

    export let data
    let { supabase } = data
    $: ({ supabase } = data)

    async function verifySession():Promise<void>  {
        console.log(await supabase.auth.getSession())
    }
    verifySession()

</script>