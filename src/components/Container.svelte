<script>
	import Avatar from '../components/Avatar';
	import classnames from 'classnames';
	export let title;
	export let dark;
	export let rounded;
	export let centered;
	export let src;

	const className = classnames({
		"nes-container": true,
		"with-title": !!title,
		"is-cenetered": !!centered,
		"is-dark": !!dark,
		"is-rounded": !!rounded
	})

</script>

<style>
	div {
		margin: 8px;
	}
</style>


<div class={className}>
	{#if title}
		{#if src}<Avatar src={src} />{/if}
		<p class="title">{title}</p>
	{/if}
	<p><slot></slot></p>		
</div>