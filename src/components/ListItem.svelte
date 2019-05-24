<script>
	import Container from './Container';
	export let icon;
</script>

<style>
	div {
		display: flex;
	}
	i {
		font-size: 48px;
		margin: 16px;
	}
	.slot {
		margin-top: auto;
		margin-bottom: auto;
	}
</style>		

<Container>
	<div>
		<i class={icon}></i>
		<div class="slot">
			<slot></slot>
		</div>
	</div>
</Container>	