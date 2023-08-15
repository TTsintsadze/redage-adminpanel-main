<script>
	import { Router, Route } from 'svelte-routing';
	import { onMount } from 'svelte';

    import SvelteRouter, { Link } from 'svelte-router';
	import { getContent } from 'api/MainApi';
	import './assets/fonts/TTNorms/fonts.css';

	//
	
    import PageMain from './Views/pages/main/index.svelte'
	import Main from './Views/index.svelte'
	import User from './Views/pages/user/index.svelte'
	import Datatable from './Views/pages/datatable.svelte'

	//
	import Auth from './Views/pages/auth/index.svelte'
	import AuthComponent from './Views/pages/auth/auth.svelte'
	import RegistrationComponent from './Views/pages/auth/registration.svelte'
	//
	$: isAuthenticated = $token;
	import { token, loginError, user } from './stores.js';
	import { navArray } from 'json/tables';
		

	const createRouter = (node) => {
		let routes = [];

		if (isAuthenticated) {
			routes = [{
				path: '/',
				component: PageMain
			},
			{
				path: '/id',
				component: User
			}];
			navArray.forEach(data => {
				routes.push (
				{
                    path: '/' + data.nav,
                    component: Datatable
                })
			})
		} else {
			routes = [
                {
                    path: '/',
                    component: AuthComponent
                },			
                {
                    path: '/auth',
                    component: AuthComponent
                },
                {
                    path: '/register',
                    component: RegistrationComponent
                },
			];
		}
		

        const router = new SvelteRouter({
            target: node,
            mode: 'hash',
            routes: routes
        })
        
        return {
            destroy () {
                router.destroy()
            }
        }	
	}


	const tokenCheck = () => {
    	const jwt = $token;
		if (jwt)
		{
			getContent(jwt)
			.then((res) => {
				if (res) {
				user.set(res);
				}
			})
			.catch((err) => {
				if (err === 400) {
				console.log( `Ошибка 400: Токен не передан или передан не в том формате.` );
				}
				if (err === 401) {
				console.log( 'Ошибка 401: Переданный токен некорректен.' );
				} else {
				console.log('Что-то пошло не так');
				}
			});
		}
	}

	tokenCheck();
	
	let toogled = true;
	onMount(async () => {
		toogled = !toogled;
  	});

	const handleLogout = () => {
        localStorage.clear();
        token.set(localStorage.getItem('jwt'));
    }
	//handleLogout ()
</script>

<svelte:head>    
    <title>Redage Logs</title>
</svelte:head>

{#if isAuthenticated}
<Main {createRouter} />
{:else}
<Auth {createRouter} />
{/if}

<!--<Router basepath="/">
	{#if isAuthenticated}
		<Route path="main" component={Main} />
	{:else}
		<Route path="" component={Auth} onLogin={handleLogin} onRegister={handleRegister}/>
	{/if}
</Router>-->
