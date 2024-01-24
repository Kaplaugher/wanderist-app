<script lang="ts">
	export let data;
</script>

<div>
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
				IMG_4985.HEIC
			</p>
			<p class="pointer-events-none block text-sm font-medium text-gray-500">3.9 MB</p>
			<a href="#" class="group block flex-shrink-0">
				<div class="flex items-center">
					<div>
						<img
							class="inline-block h-9 w-9 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
						<p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
					</div>
				</div>
			</a>
		</li>

		<!-- More files... -->
	</ul>
</div>
