import * as fs from 'node:fs/promises'; 
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';


export const addOneContact = async () => {
	try {

		const data = await fs.readFile(PATH_DB, 'utf-8');
		const contacts = JSON.parse(data);

		const newContacts = createFakeContact();

		contacts.push(newContacts);

		await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

		console.log(`Successfully added one new contact.`);	
	} catch (error) {
		console.error('Error', error);

	}
};

await addOneContact();
