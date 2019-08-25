import {url} from './serverConfig.js';


export async function headerForAddCards(event){
	if(event.target.className==='addButton'){
  		let text = prompt("Eneter text for new card");
  		if(text === null || text===''){
  			return;
  		}

  		
  		let saveToStorage = createNewArrCardObj(text, event.target.closest('.columns').id);

  		let addNewCardObj = async()=> {
  			let response = await fetch(url + 'api/card', 
  			{
  				method:'post',
  				headers: { 'Content-Type': 'application/json' },
  				body: JSON.stringify(saveToStorage)
  			});
  			return response.json();
  		}
  		return addNewCardObj();
  	}
  	else
  		return;
}

function createNewArrCardObj(text, columnId){
  	let objForStorage = {};//обьект для данных о элементе
    objForStorage.title = text;
   	objForStorage.columnId = +columnId;
   	return objForStorage;    
}