import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
//import {browserHistory} from 'react-router'
import {createBrowserHistory} from 'history'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
//import {Router, Route} from 'react-router'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Items from 'containers/items'
import Item from 'containers/item'

const store = createStore(reducers, composeWithDevTools(
		applyMiddleware(thunk)
	));

const history = syncHistoryWithStore(createBrowserHistory(), store);

/*ReactDOM.render(
	<Provider store = {store}>
		<Router history = {history}>
			<Route component={Layout}>
				<Route path='/' component={Items} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)*/

/*<Route path="items/:id" component={Item} />
<Route path="/" component={Items} />
*/

ReactDOM.render(
	<Provider store = {store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Items} />
					<Route path="/items/:id" component={Item} />
				</Switch>	
			</Layout>
				
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)