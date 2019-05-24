<script>
	import Container from './Container';
	import Avatar from './Avatar';
	export let server;

	console.log(server);

</script>

<style>
	div {
		display: flex;
	}
	.descriptions {
		flex-flow: column;
	}
	.slot {
		margin-top: auto;
		margin-bottom: auto;
		font-size: 14px;
	}
	.caption {
		font-size: 8px;

	}
	.secondary {
		color: rgba(0,0,0, .5);
	}
	a {
		color: inherit;
		text-decoration: none;
	}
</style>	

<a href="/server/{server._id}">
	<Container rounded hoverable>
		<div>
			<Avatar src={server.iconUrl} />
			<div class="descriptions">
				<p class="slot">
				{server.name}
				</p>
				<p class="slot caption">
					{server.currentEvents.length} ongoing
				</p>
				<p class="slot caption secondary">
					{server.futureEvents.length} upcoming
				</p>
			</div>
			
		</div>
	</Container>	
</a>
