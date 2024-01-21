<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { AlertCircle } from 'lucide-svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let form: any;
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form action="?/login" method="POST">
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label for="email">Email</Label>
				<Input name="email" placeholder="name@example.com" type="email" autocomplete="email" />
			</div>
			<div class="grid gap-1">
				<Label for="password">Password</Label>
				<Input name="password" type="password" />
			</div>

			<Button type="submit">Login</Button>
			<span class="cursor-pointer hover:text-blue-500">
				<a href="/reset-password">Forgot Password?</a>
			</span>
		</div>
	</form>
	{#if form?.notVerified}
		<Alert.Root variant="destructive">
			<AlertCircle class="h-4 w-4" />
			<Alert.Title>Error</Alert.Title>
			<Alert.Description>You must verify your email before logging in.</Alert.Description>
		</Alert.Root>
	{/if}
</div>
