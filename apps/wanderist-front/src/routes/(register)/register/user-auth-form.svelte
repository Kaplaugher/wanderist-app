<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form action="?/register" method="POST">
		<div class="grid gap-2">
			<div class="grid gap-4">
				<Label for="name">Name</Label>
				<Input name="name" placeholder="Bob Saget" type="text" disabled={isLoading} />
			</div>
			<div class="grid gap-1">
				<Label for="email">Email</Label>
				<Input
					name="email"
					placeholder="name@example.com"
					type="email"
					autocomplete="email"
					disabled={isLoading}
				/>
			</div>
			<div class="grid gap-1">
				<Label for="password">Password</Label>
				<Input name="password" type="password" disabled={isLoading} />
			</div>
			<div class="grid gap-1">
				<Label for="passwordConfirm">Confirm Password</Label>
				<Input name="passwordConfirm" type="password" disabled={isLoading} />
			</div>
			<Button disabled={isLoading} type="submit">Register</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2"> Or continue with </span>
		</div>
	</div>
	<Button variant="outline" type="button" disabled={isLoading}>Github</Button>
</div>
