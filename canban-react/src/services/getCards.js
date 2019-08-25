import {url} from './serverConfig';

export async function getCards(){
	const data = await fetch(url + 'api/card');
	return data.json();
}