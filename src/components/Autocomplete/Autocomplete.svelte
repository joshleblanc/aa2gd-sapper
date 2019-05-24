<script>
	import Input from '../Input';
	import Button from '../Button';
	import Container from '../Container';
	import { createEventDispatcher } from 'svelte';
	import Avatar from '../Avatar';

	export let options = [];
	export let label = "";
	export let title = "";

	const dispatch = createEventDispatcher();

	let modalOpen = false;
	let search = "";
	let selectedItem = {
		name: ""
	};

	const limit = 25;
	$: filteredOptions = options.filter(o => o.name.toLowerCase().startsWith(search.toLowerCase())).slice(0, limit);

	function selectItem(item) {
		dispatch('select', item.value);
		selectedItem = item;
		modalOpen = false;
	}
</script>

<style>
	.flex {
		display: flex;
	}
	.container {
		max-width: 100%;
	}
	.list {
		margin-top: 16px;
	}
	.dialog {
		max-width: 100%;
		z-index: 9999;
		top: 100px;
	}
	.dialog-content {
		max-height: 350px;
		overflow-y: auto;
	}
	.caption {
		font-size: 8px;
		color: rgba(0, 0, 0, .5);
	}
	.item {
		display: flex;
	}
	@media only screen and (max-width: 500px) {
		.dialog {
			max-width: 100%;
			top: -3.55em;
		}
	}
</style>

<div class="nes-field container">
	<label for="test">{label}</label>
	<div class="flex">
		<input id="test" type="text" class="nes-input" value={selectedItem.name} disabled>
		<Button variant="primary" on:click={() => modalOpen = !modalOpen}>+</Button>
	</div>
</div>

<dialog class="nes-dialog dialog" open={modalOpen || undefined}>
	<p class="title">{title}</p>
	<div class="nes-field">
		<label>Search</label>
		<input type="text" class="nes-input" bind:value={search} />
		<label class="caption">Type something to search</label>
	</div>
	<div class="list">
		<Container title="results">
			{#if search.length > 0 && filteredOptions.length === 0}
				No results found
			{/if}

			<div class="dialog-content">
				{#each filteredOptions as o}
					<Container rounded hoverable on:click={() => selectItem(o)}>
						<div class="item">
							<Avatar src={o.image}/>
							{o.name}
						</div>
					</Container>
				{/each}
			</div>
			
		</Container>
	</div>
	
	<menu class="dialog-menu">
		<button class="nes-btn" on:click={e => {
			e.preventDefault();
			modalOpen = false;
		}}>Cancel</button>
	</menu>
</dialog>