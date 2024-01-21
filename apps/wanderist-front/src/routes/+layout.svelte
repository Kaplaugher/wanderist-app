<script>
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import '../app.pcss';
	export let data;
</script>

<div class="min-h-full">
	<nav class="border-b border-gray-200 bg-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex">
					<div class="flex flex-shrink-0 items-center">
						<img
							class="block h-8 w-auto lg:hidden"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/>
						<img
							class="hidden h-8 w-auto lg:block"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/>
					</div>
					<div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
						<a
							href="/"
							class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
							aria-current="page">Home</a
						>
					</div>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:items-center">
					<!-- login/ reg /Profile dropdown -->
					{#if !data.user}
						<div class="flex gap-4">
							<Button href="/login">Login</Button>
							<Button href="/register">Register</Button>
						</div>
					{:else}
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Group>
									<DropdownMenu.Label>My Account</DropdownMenu.Label>
									<DropdownMenu.Separator />
									<DropdownMenu.Item>Profile</DropdownMenu.Item>
									<DropdownMenu.Item>Billing</DropdownMenu.Item>
									<DropdownMenu.Item>Team</DropdownMenu.Item>
									<DropdownMenu.Item>Subscription</DropdownMenu.Item>
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					{/if}
				</div>
			</div>
		</div>
	</nav>

	<div class="py-10">
		<header>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">Home</h1>
			</div>
		</header>
		<main>
			<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<slot><!-- optional fallback --></slot>
			</div>
		</main>
	</div>
</div>
