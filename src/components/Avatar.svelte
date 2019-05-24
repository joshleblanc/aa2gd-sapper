<script>
	export let src;
</script>

<style>
	div {
		width: 24px;
		height: 24px;
		display: flex;
		position: relative;
		overflow: hidden;
		font-size: 1.25rem;
		align-items: center;
		flex-shrink: 0;
		user-select: none;
		border-radius: 50%;
		justify-content: center;
		margin-right: 12px;
	}

	img {
		width: 100%;
		height: 100%;
		text-align: center;
		object-fit: cover;
	}
</style>

<div>
	<img src={src} alt="avatar">
</div>