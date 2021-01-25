import dbMiddleware from './db';
import nextConnect from 'next-connect';

export function createHandler(...middlewares) {
  return nextConnect().use(dbMiddleware, ...middlewares);
}
