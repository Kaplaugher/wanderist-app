<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { AlertCircle } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { cn } from '$lib/utils';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let data: PageData;

	// Client API:
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<SuperDebug data={$form} />
	<form action="?/login" method="POST" use:enhance>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label for="email">Email</Label>
				<Input
					name="email"
					placeholder="name@example.com"
					type="email"
					autocomplete="email"
					bind:value={$form.email}
				/>
				{#if $errors.email}
					<small class="text-red-400">{$errors.email}</small>
				{/if}
			</div>
			<div class="grid gap-1">
				<Label for="password">Password</Label>
				<Input name="password" type="password" bind:value={$form.password} />
				{#if $errors.password}
					<small class="text-red-400">{$errors.password}</small>
				{/if}
			</div>

			<Button type="submit">Login</Button>
			<span class="cursor-pointer hover:text-blue-500">
				<a href="/reset-password">Forgot Password?</a>
			</span>
		</div>
	</form>
	<div>{data.notVerified}</div>
	{#if data?.notVerified}
		<Alert.Root variant="destructive">
			<AlertCircle class="h-4 w-4" />
			<Alert.Title>Error</Alert.Title>
			<Alert.Description>You must verify your email before logging in.</Alert.Description>
		</Alert.Root>
	{/if}
</div>
