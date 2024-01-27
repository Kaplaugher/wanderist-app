<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getImageURL } from '$lib/utils';

	export let data: any;
</script>

<div>
	<div class="mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
			alt=""
			class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
		/>
	</div>
	<div class="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
		<div class="mx-auto flex max-w-2xl justify-between lg:mx-0 lg:max-w-none">
			<div>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Journal Entries</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					Vel dolorem qui facilis soluta sint aspernatur totam cumque.
				</p>
			</div>
			<Button href="/my/journal/create">New Entry +</Button>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each data?.entries as entry}
				<article
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
				>
					<img
						src={entry?.main_image
							? getImageURL(entry.collectionId, entry.id, entry.main_image)
							: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${entry.entry_title}`}
						alt=""
						class="absolute inset-0 -z-10 h-full w-full object-cover"
					/>
					<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
					<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

					<div
						class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
					>
						<time datetime="2020-03-16" class="mr-8">{entry.created}</time>
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
		</div>
	</div>
</div>
