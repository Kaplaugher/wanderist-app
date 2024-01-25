<script lang="ts">
	import type { LayoutData } from '../$types';

	export let data: LayoutData;
</script>

<div class="h-screen">
	<slot><!-- optional fallback --></slot>
</div>
