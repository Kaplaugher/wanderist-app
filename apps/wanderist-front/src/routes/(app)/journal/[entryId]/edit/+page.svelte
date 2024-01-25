<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { superForm } from 'sveltekit-superforms/client';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';

	export let data;

	// Client API:
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="flex h-full w-full flex-col p-2">
	<div class="w-full">
		<form action="?/updateEntry" method="POST" enctype="multipart/form-data" use:enhance>
			<div class="grid gap-2">
				<div class="grid gap-1">
					<Label for="entry_title">Title</Label>
					<Input
						name="entry_title"
						placeholder="Title"
						type="text"
						bind:value={$form.entry_title}
					/>
					{#if $errors.entry_title}
						<small class="text-red-400">{$errors.entry_title}</small>
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
					<Label for="location_id">Location ID</Label>
					<Input name="location_id" type="number" bind:value={$form.location_id} />
					{#if $errors.location_id}
						<small class="text-red-400">{$errors.location_id}</small>
					{/if}
				</div>
				<div class="grid gap-1">
					<Label for="main_image">Image</Label>
					<Input name="main_image" type="file" bind:value={$form.main_image} />
					{#if $errors.main_image}
						<small class="text-red-400">{$errors.main_image}</small>
					{/if}
				</div>
			</div>
			<Button type="submit">Save</Button>
		</form>
	</div>
</div>
