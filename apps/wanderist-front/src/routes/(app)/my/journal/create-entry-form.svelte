<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import type { PageData } from './$types';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let data: PageData;

	// Client API:
	const { form, errors, enhance } = superForm(data.form);
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>New +</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>New Journal Entry</Dialog.Title>
			<Dialog.Description>
				Create a new journal entry to share with your friends.
			</Dialog.Description>
		</Dialog.Header>
		<div class={cn('grid gap-6', className)} {...$$restProps}>
			<SuperDebug data={$form} />
			<form action="?/create" method="POST" use:enhance>
				<div class="grid gap-2">
					<div class="grid gap-1">
						<Label for="email">Title</Label>
						<Input
							name="entryTitle"
							placeholder="Title"
							type="text"
							bind:value={$form.entryTitle}
						/>
						{#if $errors.entryTitle}
							<small class="text-red-400">{$errors.entryTitle}</small>
						{/if}
					</div>
					<div class="grid gap-1">
						<Label for="entryDescription">Description</Label>
						<Textarea name="password" bind:value={$form.entryDescription} />
						{#if $errors.entryDescription}
							<small class="text-red-400">{$errors.entryDescription}</small>
						{/if}
					</div>
					<div class="grid gap-1">
						<Label for="email">Location ID</Label>
						<Input name="locationId" type="number" bind:value={$form.locationId} />
						{#if $errors.entryTitle}
							<small class="text-red-400">{$errors.entryTitle}</small>
						{/if}
					</div>

					<Button type="submit">Login</Button>
				</div>
			</form>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
