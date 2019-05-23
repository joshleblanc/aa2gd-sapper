export async function discordRequest(path, token) {
    const api_url = "https://discordapp.com/api";
    return fetch(`${api_url}/${path}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}