import * as fs from "node:fs/promises"; 
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
	await fs.writeFile(PATH_DB, []);
};

removeLastContact();
