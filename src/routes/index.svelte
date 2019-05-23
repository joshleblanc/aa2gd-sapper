<script context="module">
	export function preload(page, session) {
		return {
			href: `https://discordapp.com/api/oauth2/authorize?client_id=570931295253823488&redirect_uri=${"http://localhost:3000/authenticate"}&response_type=code&scope=email identify guilds connections`
		}
	}
</script>

<script>
	import LoginButton from '../components/LoginButton';
	export let href;
	console.log(href);
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<LoginButton href={href}>Login</LoginButton>