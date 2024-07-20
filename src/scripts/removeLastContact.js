import * as fs from 'node:fs/promises'; 
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
	try {
		const data = await fs.readFile(PATH_DB);
		const contacts = JSON.parse(data);

		if (contacts.length > 0) {
			contacts.pop();
		}
		await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
		// console.log(`Removed contact: ${removeLastContact}`);
  } catch (error) {
    console.log('Error', error);
  }
};

removeLastContact();
