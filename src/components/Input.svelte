<script>
	export let label;
	export let name;
</script>

<div class="nes-field">
	<label for={name}>{label}</label>
	<input type="text" id={name} class="nes-input">
</div>