import { isString } from 'jet-validators';

import schema from '../util/schema';
import { isRelationalKey } from '../util/validators';

/******************************************************************************
                                  Types
******************************************************************************/

export interface IUser {
  id: number;
  name: string;
  email: string;
  created: Date;
}

/******************************************************************************
                                 Setup
******************************************************************************/

const User = schema<IUser>({
  id: isRelationalKey,
  name: isString,
  created: Date,
  email: isString,
});

/******************************************************************************
                                Export default
******************************************************************************/

export default User;
