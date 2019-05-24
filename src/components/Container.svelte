<script>
	import Avatar from '../components/Avatar';
	import classnames from 'classnames';
	export let title = "";
	export let dark = false;
	export let rounded = false;
	export let centered = false;
	export let src = null;
	export let hoverable = false;

	const className = classnames({
		"nes-container": true,
		"with-title": !!title,
		"is-cenetered": !!centered,
		"is-dark": !!dark,
		"is-rounded": !!rounded,
		"hoverable": !!hoverable
	});

</script>

<style>
	div {
		margin: 4px;
		padding: 1.5em 1em;
	}
	.hoverable:hover {
		background-color: rgba(0, 0, 0, 0.14);
	}
</style>


<div class={className} on:click>
	{#if title}
		{#if src}<Avatar src={src} />{/if}
		<p class="title">{title}</p>
	{/if}
	<slot></slot>		
</div>