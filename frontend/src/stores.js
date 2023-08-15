import { writable } from 'svelte/store';

export const token = writable(localStorage.getItem('jwt'));
export const user = writable('')
export const currentTable = writable('')
export const loginError = writable('');