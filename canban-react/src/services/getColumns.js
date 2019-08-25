import {url} from './serverConfig';

export async function getColumns(){
	const data = await fetch(url + 'api/column');
	return data.json();
}