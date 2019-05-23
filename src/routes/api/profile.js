import Cookies from 'cookies';
import { model } from 'mongoose';
import jwt from 'jsonwebtoken';
import { discordRequest } from '../../lib/discordRequest';

export async function get(req, res, next) {
	const cookies = new Cookies(req, res);
	const token = cookies.get('token');
	console.log(token);
	if(token) {
		console.log("???");
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		console.log(decoded);
        const r = await discordRequest("users/@me", decoded.access_token);
        const json = await r.json();
        console.log(json);
        const user = await model('User').findOne({id: json.id}).populate({
            path: 'servers',
            populate: {path: 'events'}
        }).populate({
            path: 'games',
            populate: {path: 'events'}
        }).exec();
        res.end(JSON.stringify(user));
	}
	res.end();
}