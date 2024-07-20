import * as fs from 'node:fs/promises'; 
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
	try {
		const data = await fs.readFile(PATH_DB);
		const contacts = JSON.parse(data);

		return contacts.length;	
	} catch (error) {
		console.error('Error', error);
		return 0;
	}

};

console.log(await countContacts());
