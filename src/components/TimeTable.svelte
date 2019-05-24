<script>
	export let timeTable;
	const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	const times = [];
    for (let i = 0; i < 24; i++) {
        times.push(`${i}:00`);
    }

    function onClick(time, day) {
    	if(timeTable[day].includes(time)) {
    		timeTable[day] = timeTable[day].filter(t => t !== time);
		} else {
    		timeTable[day] = [...timeTable[day], time];
		}
    	console.log(time, day);
    }
</script>

<style>
	table {
		width: 100%;
		table-layout: fixed;
		font-size: 8px;
	}
	.green {
		background-color: green;
	}
	.red {
		background-color: red;
	}
</style>

<table class="nes-table is-bordered is-centered">
	<thead>
		<tr>
			<th colspan="2"></th>
			{#each daysOfWeek as day}
				<th align="center">{day}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each times as time}
			<tr>
				<td colspan="2">{time}</td>
				{#each daysOfWeek as day}
					<td on:click={e => onClick(time, day)} class="{timeTable[day].includes(time) ? 'green' : 'red'}"></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
