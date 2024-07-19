import * as fs from "node:fs/promises"; 
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
	try {
		const data = await fs.readFile(PATH_DB, "utf-8");
		const contacts = JSON.parse(data);

		return contacts.lenght;	
	} catch (error) {
		console.error("Error", error);
		return 0;
	}

};

console.log(await countContacts());
