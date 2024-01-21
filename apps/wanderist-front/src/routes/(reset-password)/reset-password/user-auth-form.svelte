<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';

	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form action="?/resetPassword" method="POST">
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label for="email">Email</Label>
				<Input name="email" placeholder="name@example.com" type="email" autocomplete="email" />
			</div>

			<Button type="submit">Request Password Reset</Button>
		</div>
	</form>
</div>
