<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { getImageURL } from '$lib/utils';

	export let data;
	console.log(data);
</script>

<div class="relative h-96 w-full">
	<img
		class=" h-full w-full object-cover"
		src={data.place.images[0]
			? getImageURL(data.place.collectionId, data.place.id, data.place.images[0])
			: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.entry.entry_title}`}
		alt="main image"
	/>
</div>

<div class="px-4 py-4 lg:flex lg:items-center lg:justify-between">
	<div class="min-w-0 flex-1">
		<h2
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
		>
			{data.place.place_name}
		</h2>
		<div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
			<div class="mt-2 flex items-center gap-2 text-sm text-gray-500">
				{#each data.place.category as cat}
					<Badge>{cat}</Badge>
				{/each}
			</div>
			<div class="mt-2 flex items-center text-sm text-gray-500">
				<svg
					class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
						clip-rule="evenodd"
					/>
				</svg>
				Place
			</div>
		</div>
	</div>
	<div class="mt-5 flex lg:ml-4 lg:mt-0">
		<button
			type="button"
			class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
		>
			<svg
				class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
				/>
				<path
					d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
				/>
			</svg>
			Share
		</button>

		<form method="POST">
			<button
				formaction="?/deletePlace"
				class="ml-4 inline-flex items-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600"
			>
				<svg
					class="-ml-0.5 mr-1.5 h-5 w-5 text-white"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
					/>
				</svg>
				Delete
			</button>
		</form>
	</div>
</div>
<div class="bg-white py-4">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			<div
				class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2"
			>
				<p class="">
					{data.place.description}
				</p>

				<Carousel.Root class="w-full ">
					<Carousel.Content>
						{#each data.place.images as url, i (i)}
							<Carousel.Item>
								<div class="relative h-96 w-full">
									<img
										class=" h-full w-full object-cover"
										src={url
											? getImageURL(data.place.collectionId, data.place.id, url)
											: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.entry.entry_title}`}
										alt="carousel"
									/>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>
		</div>
	</div>
</div>
