<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div>
	<div>
		<img
			class="h-48 w-full object-cover lg:h-96"
			src={data.entry?.main_image
				? getImageURL(data.entry.collectionId, data.entry.id, data.entry.main_image)
				: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.entry.entry_title}`}
			alt=""
		/>
	</div>
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
			<div class="flex">
				<img
					class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
					src={data.user?.avatar
						? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
						: `https://ui-avatars.com/api/?name=${data.user?.name}`}
					alt=""
				/>
			</div>
			<div
				class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
			>
				<div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
					<h1 class="truncate text-2xl font-bold text-gray-900">{data.entry.entry_title}</h1>
				</div>
				<div
					class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
				>
					<Button href={`/journal/${data.entry.id}/places/create`}>New Place +</Button>

					<button
						class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<svg
							class="-ml-0.5 mr-1.5 h-5 w-5"
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
						<span>Share</span>
					</button>

					<form method="POST">
						<button
							formaction="?/deleteEntry"
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
		</div>
		<div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
			<h1 class="truncate text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
		</div>
	</div>
</div>

<ul role="list" class=" divide-y divide-gray-100">
	{#each data.places as place}
		<li class="relative flex justify-between gap-x-6 px-4 py-8 hover:bg-gray-50 sm:px-6 lg:px-8">
			<div class="flex min-w-0 gap-x-4">
				<img
					class="h-24 w-24 rounded-lg bg-gray-50"
					src={place.images[0]
						? getImageURL(place.collectionId, place.id, place.images[0])
						: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${place.place_name}`}
					alt=""
				/>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						<a href={`/journal/${data.entryId}/places/${place.id}`}>
							<span class="absolute inset-x-0 -top-px bottom-0"></span>
							{place.place_name}
						</a>
					</p>
					<p class="mt-1 flex text-xs leading-5 text-gray-500">
						{place.description}
					</p>
				</div>
			</div>
			<div class="flex shrink-0 items-center gap-x-4">
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<p class="text-sm leading-6 text-gray-900">Category</p>
					<p class="mt-1 text-xs leading-5 text-gray-500">
						{place.created}
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
	{/each}
</ul>
