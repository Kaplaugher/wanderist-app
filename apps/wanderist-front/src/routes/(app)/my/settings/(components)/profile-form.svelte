<script lang="ts" context="module">
	import { z } from 'zod';
	export const profileFormSchema = z.object({
		username: z
			.string()
			.min(2, 'Username must be at least 2 characters.')
			.max(30, 'Username must not be longer than 30 characters'),
		bio: z.string().min(4).max(160).default('I own a computer.'),
		website: z
			.string()
			.url({ message: 'Please enter a valid URL.' })
			.default('https://shadcn-svelte.com')
	});
	export type ProfileFormSchema = typeof profileFormSchema;
</script>

<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/select';
	import { Label } from '$lib/components/ui/label';

	export let data: SuperValidated<ProfileFormSchema>;
</script>

<Form.Root
	form={data}
	schema={profileFormSchema}
	let:config
	method="POST"
	class="space-y-8"
	debug={true}
>
	<Form.Item>
		<Form.Field {config} name="username">
			<Form.Label>Username</Form.Label>
			<Form.Input placeholder="shadcn" />
			<Form.Description>
				This is your public display name. It can be your real name or a pseudonym. You can only
				change this once every 30 days.
			</Form.Description>
			<Form.Validation />
		</Form.Field>
	</Form.Item>

	<Form.Item>
		<Form.Field {config} name="bio">
			<Form.Label>Bio</Form.Label>
			<Form.Textarea placeholder="Tell us a little bit about yourself" class="resize-none" />
			<Form.Description>Brief bio for your profile.</Form.Description>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Item>
		<Form.Field {config} name="website">
			<Form.Label>Website</Form.Label>
			<Form.Input />
			<Form.Description>Your personal website, blog, or portfolio.</Form.Description>
			<Form.Validation />
		</Form.Field>
	</Form.Item>
	<Form.Button on:click={() => console.log(data.data)}>Update profile</Form.Button>
</Form.Root>
