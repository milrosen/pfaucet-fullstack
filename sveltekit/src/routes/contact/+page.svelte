<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	let contact_name = '';
	let contact_email = '';
	let message = '';

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		if (!validEmail()) return;
		if (contact_name === '') return;
		if (message === '') return;
		// @ts-ignore
		window.emailjs
			.send('service_blk2thr', 'template_j6t5r97', {
				contact_name: contact_name,
				contact_email: contact_email,
				message: message
			})
			.then(handleSucess, handleError);
	};

	const validEmail = (): boolean => {
		return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
			contact_email
		);
	};

	const handleSucess = () => {};

	const handleError = () => {};
</script>

<div>
	<form>
		<label class="infoLabel">
			<input
				type="text"
				placeholder="your name"
				class="textInput"
				required
				bind:value={contact_name}
			/>
		</label>
		<label class="infoLabel">
			<input
				type="email"
				placeholder="email"
				class="textInput"
				required
				bind:value={contact_email}
			/>
		</label>
		<label>
			say something nice please !!!
			<textarea required name="message" class="textInput" bind:value={message} />
		</label>
		<Link href="" span="submit" onClick={handleSubmit} />
	</form>
</div>

<style>
	label {
		display: flex;
		font-weight: bold;
		flex-direction: column;
		width: 100%;
		margin-top: 1em;
	}

	.infoLabel::before {
		content: ' ';
		position: absolute;
		transform: translateY(calc(2rem - 1px)) scaleX(0);
		height: 2px;
		width: 100%;
		background-color: black;
		transition: transform 200ms ease-out;
	}

	.infoLabel:focus-within::before {
		transform: translateY(calc(2rem - 1px)) scaleX(100%);
	}

	form {
		width: 100%;
		transition: transform 200ms ease;
		background: white;
	}

	.textInput {
		box-sizing: border-box;
		padding: 0.5em;
		padding-bottom: calc(0.5em + 1.5px);
		width: 100%;
		border: none;
		outline: none;
		border-bottom: 1.5px solid black;
		font-weight: bold;
	}
</style>
