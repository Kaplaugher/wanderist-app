<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { getImageURL } from '$lib/utils';
	export let data: any;
	console.log(data);
</script>

<div class="bg-white px-6 py-4 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<p class="text-base font-semibold leading-7 text-blue-600">Explore the world</p>
		<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
			Recent Journals
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
			sunt amet fugiat veniam occaecat fugiat aliqua.
		</p>
	</div>
</div>

<div class="flex flex-col gap-4 bg-white py-12">
	<ul
		role="list"
		class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		{#each data.entries as entry}
			<article
				class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
			>
				<img
					src={entry?.main_image
						? getImageURL(entry.collectionId, entry.id, entry.main_image)
						: `https://ui-avatars.com/api/?name=${data.user.name}`}
					alt=""
					class="absolute inset-0 -z-10 h-full w-full object-cover"
				/>
				<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
				<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

				<div
					class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
				>
					<time datetime="2020-03-16" class="mr-8">12/12/12</time>
					<div class="-ml-4 flex items-center gap-x-4">
						<svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
							<circle cx="1" cy="1" r="1" />
						</svg>
						<div class="flex gap-x-2.5">
							<img
								src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								class="h-6 w-6 flex-none rounded-full bg-white/10"
							/>
							{data?.user?.username}
						</div>
					</div>
				</div>
				<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
					<a href={`/journal/${entry.id}`}>
						<span class="absolute inset-0"></span>
						{entry.entry_title}
					</a>
				</h3>
			</article>
		{/each}
	</ul>
	<Separator />

	<ul
		role="list"
		class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		<li class="relative">
			<div
				class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
			>
				<img
					src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
					alt=""
					class="pointer-events-none object-cover group-hover:opacity-75"
				/>
				<button type="button" class="absolute inset-0 focus:outline-none">
					<span class="sr-only">View details for IMG_4985.HEIC</span>
				</button>
			</div>
			<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
				Japan Eats
			</p>
			<p class="pointer-events-none block text-sm font-medium text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui et officiis alias
				aspernatur omnis.
			</p>
		</li>
		<li class="relative">
			<div
				class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
			>
				<img
					src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
					alt=""
					class="pointer-events-none object-cover group-hover:opacity-75"
				/>
				<button type="button" class="absolute inset-0 focus:outline-none">
					<span class="sr-only">View details for IMG_4985.HEIC</span>
				</button>
			</div>
			<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
				Japan Eats
			</p>
			<p class="pointer-events-none block text-sm font-medium text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui et officiis alias
				aspernatur omnis.
			</p>
		</li>
		<li class="relative">
			<div
				class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
			>
				<img
					src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
					alt=""
					class="pointer-events-none object-cover group-hover:opacity-75"
				/>
				<button type="button" class="absolute inset-0 focus:outline-none">
					<span class="sr-only">View details for IMG_4985.HEIC</span>
				</button>
			</div>
			<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
				Japan Eats
			</p>
			<p class="pointer-events-none block text-sm font-medium text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui et officiis alias
				aspernatur omnis.
			</p>
		</li>
		<li class="relative">
			<div
				class="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
			>
				<img
					src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
					alt=""
					class="pointer-events-none object-cover group-hover:opacity-75"
				/>
				<button type="button" class="absolute inset-0 focus:outline-none">
					<span class="sr-only">View details for IMG_4985.HEIC</span>
				</button>
			</div>
			<p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
				Japan Eats
			</p>
			<p class="pointer-events-none block text-sm font-medium text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui et officiis alias
				aspernatur omnis.
			</p>
		</li>
	</ul>
</div>
