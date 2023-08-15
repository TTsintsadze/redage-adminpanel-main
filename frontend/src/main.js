import App from './App.svelte';
import moment from 'moment';

moment.locale('ru');

const app = new App({
	target: document.body,
	props: {
		name: ''
	}
});

export default app;