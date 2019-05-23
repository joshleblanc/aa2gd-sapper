import Cookies from 'cookies';
const FormData = require('form-data');
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { discordRequest } from '../lib/discordRequest';


export async function get(req, res, next) {
		const cookies = new Cookies(req, res);
		console.log(req.hostname);
		const data = new FormData();
        data.append('client_id', process.env.DISCORD_CLIENT_ID);
        data.append('client_secret', process.env.DISCORD_CLIENT_SECRET);
        data.append('redirect_uri', `http://${req.headers.host}/authenticate`);
        data.append('grant_type', 'authorization_code');
        data.append('scope', 'email identify guilds connections');
        data.append('code', req.query.code);
        console.log(data);
        const r = await fetch(`https://discordapp.com/api/oauth2/token`, {
            method: "POST",
            body: data,
        });

        const json = await r.json();
        console.log(json);
        const userRequest = await discordRequest("users/@me", json.access_token);
        const user = await userRequest.json();
        const connectionsRequest = await discordRequest("users/@me/connections", json.access_token);
        const connections = await connectionsRequest.json();
        const serversRequest = await discordRequest("users/@me/guilds", json.access_token);
        let servers = await serversRequest.json();
        console.log(servers);
        servers = await Promise.all(servers.map(async s => {
            return await mongoose.model('Server').findOneAndUpdate({id: s.id}, s, {upsert: true, new: true});
        }));

        const steamConnection = connections.find(c => c.type === 'steam');
        let games = [];
        if (steamConnection) {
            const gamesResponse = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamConnection.id}&format=json&include_appinfo=1&include_played_free_games=1`);
            const gamesResponseJson = await gamesResponse.json();
            games = gamesResponseJson.response.games;
        }


        games = await Promise.all(games.map(async g => {
            return await mongoose.model('Game').findOneAndUpdate({appid: g.appid}, g, {upsert: true, new: true});
        }));

        const newUser = await mongoose.model('User').findOneAndUpdate({id: user.id}, {
            ...user,
            avatarUrl: `http://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
            connections: connections.filter(c => c.visibility === 1),
            servers,
            games
        }, {upsert: true, new: true});

        if (json.error) {
            throw new Error("Invalid code");
        } else {
            const token = jwt.sign({...json, _id: newUser._id}, process.env.JWT_SECRET, {expiresIn: json.expires_in});
            cookies.set('token', token);
            res.writeHead(302, {
            	Location: '/profile'
            });

        }
		res.end();
}