<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { client } from '$lib/utils/client';
	export const load: Load = async ({ fetch }) => {
		const res = await client(fetch)
			._id(1)
			.$post({ body: { id: 11 } });
		return {
			props: {
				apiRes: res.text
			}
		};
	};
</script>

<script lang="ts">
	export let apiRes: string;
	let body: number = 1;
	let params: number = 11;
	const updateApiRes = async (body: number, params: number) => {
		apiRes = await client()
			._id(params)
			.$post({ body: { id: body } })
			.then((r) => r.text);
	};
	$: updateApiRes(body, params);
</script>

<h1 class="text-3xl">Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev" class="link link-hover">kit.svelte.dev</a> to read the documentation
</p>
<p class="text-lg">{apiRes}</p>
<div class="form-control">
	<label class="label" for="body-id">
		<span class="label-text">bodyId</span>
	</label>
	<input type="number" bind:value={body} class="input" id="body-id" />
</div>

<div class="form-control">
	<label class="label" for="params-id">
		<span class="label-text">paramsId</span>
	</label>
	<input type="number" bind:value={params} class="input" id="params-id" />
</div>
