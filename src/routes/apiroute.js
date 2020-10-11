import { users } from '../stores/users';
// import { get as getStore } from 'svelte/store';
import { get as getStore } from 'svelte/store';

export async function get(req, res, next) {
  console.log('GET FUNCTION FROM SERVER ROUTE!');
  res.json({ success: true, data: getStore(users) });
};

export function post(req, res, next) {
  console.log('Hi from POST server route!');
  // res.json({ success: true });
}