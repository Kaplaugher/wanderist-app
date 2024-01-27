<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let data;

	// Client API:
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<SuperDebug data={$form} />
	<form action="?/create" method="POST" enctype="multipart/form-data" use:enhance>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label for="place_name">Title</Label>
				<Input name="place_name" placeholder="Title" type="text" bind:value={$form.place_name} />
				{#if $errors.place_name}
					<small class="text-red-400">{$errors.place_name}</small>
				{/if}
			</div>
			<div class="grid gap-1">
				<Label for="description">Description</Label>
				<Textarea name="description" bind:value={$form.description} />
				{#if $errors.description}
					<small class="text-red-400">{$errors.description}</small>
				{/if}
			</div>
			<div class="grid gap-1">
				<Label for="category">Category</Label>
				<Textarea name="category" bind:value={$form.category} />
				{#if $errors.category}
					<small class="text-red-400">{$errors.category}</small>
				{/if}
			</div>
			<div class="grid gap-1">
				<div class="grid gap-1">
					<Label for="images">Images</Label>
					<Input multiple name="images" type="file" bind:value={$form.images} />
					{#if $errors.images}
						<small class="text-red-400">{$errors.images}</small>
					{/if}
				</div>
			</div>
			<Button type="submit">Save</Button>
		</div>
	</form>
</div>
