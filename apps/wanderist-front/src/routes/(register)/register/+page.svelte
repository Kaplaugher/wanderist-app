<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import UserAuthForm from './user-auth-form.svelte';
	export let data;
</script>

<div
	class="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<Button href="/login" variant="ghost" class="absolute right-4 top-4 md:right-8 md:top-8">
		Login
	</Button>
	<div class="bg-muted relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
		/>
		<div class="relative z-20 flex items-center text-4xl font-medium">
			<!-- <Command class="mr-2 h-6 w-6" /> -->
			Wanderist
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;Man cannot discover new oceans unless he has the courage to lose sight of the
					shore.&rdquo;
				</p>
				<footer class="text-sm">Andre Gide</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p class="text-muted-foreground text-sm">Enter your email below to create your account</p>
			</div>
			<UserAuthForm {data} />
			<p class="text-muted-foreground px-8 text-center text-sm">
				By clicking continue, you agree to our{' '}
				<a href="/terms" class="hover:text-primary underline underline-offset-4">
					Terms of Service
				</a>{' '}
				and{' '}
				<a href="/privacy" class="hover:text-primary underline underline-offset-4">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
