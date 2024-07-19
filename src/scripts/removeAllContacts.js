import * as fs from "node:fs/promises"; 
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
	try {
		await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));

		console.log("Successfully removed all contacts.");
	} catch (error) {
		console.error("Error", error);
	}
};

removeAllContacts();
