<script>
	export let src;
</script>

<style>
	div {
		width: 48px;
		height: 48px;
		display: flex;
		position: relative;
		overflow: hidden;
		font-size: 1.25rem;
		align-items: center;
		flex-shrink: 0;
		user-select: none;
		border-radius: 50%;
		justify-content: center;
	}

	img {
		width: 100%;
		height: 100%;
		text-align: center;
		object-fit: cover;
		image-rendering: pixelated;
	}
</style>

<div>
	<img src={src} alt="avatar">
</div>