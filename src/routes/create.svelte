<script context="module">
	import { userStore } from './currentUserStore';
	export async function preload(page, session) {
		await userStore.fetch.bind(this)();
	}
</script>

<script>
	import Autocomplete from '../components/Autocomplete/Autocomplete';
	import Picker from 'pickerjs/dist/picker.js';
	import { onMount } from 'svelte';
	let user;
	let server;
	let game;
	let datePicker;
	userStore.subscribe(t => user = t);
	onMount(() => {
		new Picker(datePicker);
	})
	
</script>

<style>
	section {
		margin-left: auto;
		margin-right: auto;
		max-width: 580px;
	}

	button {
		margin-top: 16px;

	}
	.actions {
		width: 100%;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
	}
</style>
<section>
	<p>
		Create an event!
	</p>
	<form>
		<div class="nes-field">
			<label for="name">Name</label>
			<input type="text" id="name" class="nes-input">	
		</div>
		<Autocomplete 
			label="Server"
			title="Select a server"
			options={user.servers.map(s => ({
				value: s._id,
				name: s.name,
				image: s.iconUrl
			}))}
			select={id => server = id}
		/>
		<Autocomplete
			label="Game"
			title="Select a game"
			options={user.games.map(g => ({
				value: g._id,
				name: g.name,
				image: g.iconUrl
			}))}
			select={id => game = id}
		/>
		<div class="nes-field">
			<label>Date</label>
			<input bind:this={datePicker} type="text" class="nes-input js-date-picker">
		</div>
		<div class="actions">
			<button class="nes-btn is-primary">Submit</button>
		</div>
		
	</form>
</section>
