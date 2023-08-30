<script lang="ts">
	import Link from './Link.svelte';

	export let showModal: boolean;
	export let closeModal: Function;

	let dialog: HTMLDialogElement;

	let contact_name = '';
	let contact_email = '';
	let message = '';

	let emailInputError: boolean;
	let nameInputError: boolean;
	let messageInputError: boolean;

	$: if (dialog && showModal) dialog.showModal();
	$: {
		emailInputError = !validEmail(contact_email);
		nameInputError = contact_name === '';
		messageInputError = message === '';
	}

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		if (emailInputError || nameInputError || messageInputError) return;
		//@ts-ignore
		window.emailjs
			.send('service_gpa23aq', 'template_rsrmcqp', {
				contact_name: contact_name,
				contact_email: contact_email,
				message: message
			})
			.then(handleSucess, handleError);
		handleSucess();
	};

	const validEmail = (email: string): boolean => {
		return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
			email
		);
	};

	const handleSucess = () => {
		contact_email = '';
		contact_name = '';
		message = '';
		window.alert('sent sucessfully');
		handleClose();
	};

	const handleError = () => {};

	const handleClose = () => {
		closeModal();
		dialog.close();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal = false)} on:click|self={() => handleClose()}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<form>
			<label class="infoLabel">
				<input
					type="text"
					placeholder="name"
					class={`textInput ${nameInputError ? 'error' : ''}`}
					required
					bind:value={contact_name}
				/>
			</label>
			<label class="infoLabel">
				<input
					type="email"
					placeholder="email"
					class={`textInput ${emailInputError ? 'error' : ''}`}
					required
					bind:value={contact_email}
				/>
			</label>
			<label>
				say something nice please !!!
				<textarea
					required
					name="message"
					class={`textInput ${messageInputError ? 'error' : ''}`}
					bind:value={message}
				/>
			</label>
			<Link
				href=""
				span="submit"
				onClick={(e) => {
					handleSubmit(e);
				}}
			/>
		</form>
	</div>
</dialog>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	.textInput {
		box-sizing: border-box;
		padding: 0.5em;
		padding-bottom: calc(0.5em + 1.5px);
		width: 100%;
		outline: none;
		border: 1.5px solid var(--black);
	}
	label {
		margin: 1rem 0;
	}
	textarea {
		height: 10rem;
	}
	.error {
		border-color: red;
	}
</style>
