<script>
	import { pb } from "$lib/session";
	async function signin() {
		try {
			pb.authStore.clear()
			console.log(await pb.collection("users").authWithOAuth2({provider: "google"}))
		} catch (e) {
			console.log(e)
		}
	}
</script>

<div class="h-full flex justify-center items-center">
	<button on:click={signin} class="dui-btn dui-btn-neutral dui-btn-wide rounded-full text-md font-normal">
		<iconify-icon class="text-2xl" icon="devicon:google"></iconify-icon> Sign in with Google
	</button>
</div>
