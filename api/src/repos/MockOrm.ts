import { readFile, writeFile } from 'jsonfile';

import { IUser } from '../models/User';

/******************************************************************************
                                Variables
******************************************************************************/

const DB_FILE_NAME = 'database.json';

/******************************************************************************
                                Types
******************************************************************************/

interface IDb {
  users: IUser[];
}

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDb>;
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return writeFile(__dirname + '/' + DB_FILE_NAME, db);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  openDb,
  saveDb,
} as const;
