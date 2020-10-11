import {writable} from 'svelte/store';

export const users = writable([
	{ source: 'Store'},
  {id: 1, name: 'Kalu Rinpoche', lineage: 'Kagyu'},
  {id: 2, name: 'Thrangu Rinpoche', lineage: 'Kagyu'},
]);