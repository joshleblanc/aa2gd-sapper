<script context="module">
	export async function preload(page, session) {
		const resp = await this.fetch('/api/profile', {
			credentials: 'include'
		});

		const json = await resp.json();
		console.log("json:", json);
		return {
			user: json
		}
	}
</script>

<script>
	import Container from '../components/Container';
	import Avatar from '../components/Avatar';
	import TimeTable from '../components/TimeTable';

	export let src;
	export let user;
	console.log(user);
</script>
<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-6">
		<Container title="Timetable">
			<TimeTable timeTable={user.timeTable} />
		</Container>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-6">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-lg-6">
				<Container title="Servers"></Container>

			</div>
			<div class="col-xs-12 col-sm-12 col-lg-6">
				<Container title="Connections"></Container>

			</div>
		</div>
	</div>
</div>
