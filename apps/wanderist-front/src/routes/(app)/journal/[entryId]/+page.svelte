<script>
	import { getImageURL } from '$lib/utils';
	import { Pencil } from 'lucide-svelte';
	export let data;
</script>

<section class="mt-4 flex h-full flex-col overflow-auto">
	<div class="bg-white py-4">
		<div class="flex justify-between">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					{data.entry?.entry_title}
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					{data.entry?.description}
				</p>
			</div>
			<a href={`/journal/${data.entryId}/edit`} class="self-end">
				<Pencil class="h-8 w-8" />
			</a>
		</div>
	</div>

	<div class="relative h-96">
		<img
			class="h-full w-full rounded-lg object-cover shadow-2xl"
			alt="hero"
			src={data.entry?.main_image
				? getImageURL(data.entry.collectionId, data.entry.id, data.entry.main_image, '80x80')
				: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.entry.entry_title}`}
		/>
	</div>
	<ul role="list" class="divide-y divide-gray-100">
		<li class="relative flex justify-between gap-x-6 px-4 py-8 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href="#">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							Leslie Alexander
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						<a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline"
							>leslie.alexander@example.com</a
						>
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
					<p class="mt-1 text-xs leading-5 text-gray-500">
						Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
					</p>
				</div>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
		<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href="#">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							Michael Foster
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						<a href="mailto:michael.foster@example.com" class="relative truncate hover:underline"
							>michael.foster@example.com</a
						>
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Co-Founder / CTO</p>
					<p class="mt-1 text-xs leading-5 text-gray-500">
						Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
					</p>
				</div>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
		<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href="#">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							Dries Vincent
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						<a href="mailto:dries.vincent@example.com" class="relative truncate hover:underline"
							>dries.vincent@example.com</a
						>
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Business Relations</p>
					<div class="mt-1 flex items-center gap-x-1.5">
						<div class="flex-none rounded-full bg-emerald-500/20 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
						</div>
						<p class="text-xs leading-5 text-gray-500">Online</p>
					</div>
				</div>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
		<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href="#">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							Lindsay Walton
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						<a href="mailto:lindsay.walton@example.com" class="relative truncate hover:underline"
							>lindsay.walton@example.com</a
						>
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Front-end Developer</p>
					<p class="mt-1 text-xs leading-5 text-gray-500">
						Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
					</p>
				</div>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
		<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href="#">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							Courtney Henry
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						<a href="mailto:courtney.henry@example.com" class="relative truncate hover:underline"
							>courtney.henry@example.com</a
						>
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Designer</p>
					<p class="mt-1 text-xs leading-5 text-gray-500">
						Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
					</p>
				</div>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
		<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href="#">
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							Tom Cook
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						<a href="mailto:tom.cook@example.com" class="relative truncate hover:underline"
							>tom.cook@example.com</a
						>
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Director of Product</p>
					<div class="mt-1 flex items-center gap-x-1.5">
						<div class="flex-none rounded-full bg-emerald-500/20 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
						</div>
						<p class="text-xs leading-5 text-gray-500">Online</p>
					</div>
				</div>
				<svg
					class="h-5 w-5 flex-none text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</li>
	</ul>
</section>
