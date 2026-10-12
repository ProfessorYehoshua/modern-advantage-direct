<script lang="ts">
	import LegalPage from '$lib/components/site/LegalPage.svelte';

	let { data } = $props();
</script>

<!-- TODO: replace with the final text provided by counsel. -->
<LegalPage title={data.title}>
	<p
		class="p-4 text-sm font-medium text-amber-800 bg-amber-50 rounded-lg border border-amber-200"
	>
		Placeholder — the final {data.title} will be provided by counsel before launch.
	</p>
</LegalPage>
