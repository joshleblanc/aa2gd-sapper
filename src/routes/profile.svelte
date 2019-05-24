<script context="module">
	import { userStore } from './currentUserStore';
	export async function preload(page, session) {
		await userStore.fetch.bind(this)();
	}
</script>

<script>
	import Container from '../components/Container';
	import Row from '../components/Row';
	import Col from '../components/Col';
	import Avatar from '../components/Avatar';
	import TimeTable from '../components/TimeTable';
	import Connection from '../components/Connection';
	import ServerItem from '../components/ServerItem';

	export let src;
	let user;
	userStore.subscribe(u => {
		user = u;
	})
	console.log(user);

</script>

<style>
	.servers {
		max-height: 760px;
		overflow-y: auto;
	}	
	i {
		image-rendering: pixelated;
	}
</style>

<Row>
	<Col xs={12} md={6}>
		<Container title="Timetable">
			<TimeTable timeTable={user.timeTable} />
		</Container>
	</Col>
	<div class="col-xs-12 col-sm-12 col-md-6">
		<div class="row">
			
			<Col xs={12} lg={6}>
				<Container title="Servers">
					<div class="servers">
						{#each user.servers as server}
							<ServerItem {server} />
						{/each}
					</div>
				</Container>
			</Col>
			<Col xs={12} lg={6}>
				<Container title="Connections">
					{#each user.connections as connection}
						<Connection {connection} />
					{/each}
				</Container>
			</Col>
		</div>
	</div>
</Row>
