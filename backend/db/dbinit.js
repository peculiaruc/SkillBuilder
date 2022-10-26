/* eslint-disable no-console */
import dbInterface from './index';
import { users } from '../models/users';

export default async () => {
  try {
    // check db for response
    await dbInterface.query('SELECT NOW()');
    // create tables
    await dbInterface.query(users);

    if (process.env.NODE_ENV !== 'production') {
      console.log('Database connected with tables');
    }
    return true;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(error.message);
    }
    return false;
  }
};
