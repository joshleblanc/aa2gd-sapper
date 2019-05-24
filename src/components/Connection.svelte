<script>
	import Container from './Container';
	export let connection;

	let icon;
	switch(connection.type) {
		case 'steam':
			icon = 'fab fa-steam';
			break;
		case 'twitch':
			icon = 'fab fa-twitch'
			break;
		case 'youtube':
			icon = 'fab fa-youtube'
			break;
		case 'skype':
			icon = 'fab fa-skype';
			break;
		case 'reddit':
			icon = 'fab fa-reddit';
			break;
		case 'facebook':
			icon = 'fab fa-facebook';
			break;
		case 'twitter':
			icon = 'fab fa-twitter';
			break;
		case 'spotify':
			icon = 'fab fa-spotify';
			break;
		case 'xbox':
			icon = 'fab fa-xbox';
			break;
		default:
			icon = 'fab fa-battle-net'
			break;
	}

</script>

<style>
	div {
		display: flex;
	}
	i {
		font-size: 24px;
		margin-right: 16px;
	}
	.slot {
		margin-top: auto;
		margin-bottom: auto;
	}
</style>		

<Container rounded hoverable>
	<div>
		<i class={icon}></i>
		<p class="slot">
			{connection.name}
		</p>
	</div>
</Container>	