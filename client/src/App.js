import React, { Component } from 'react';

import Navbar from './components/Navbar';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/login" component={LoginForm} />
						<Route exact path="/register" component={RegisterForm} />
					</Switch>
				</Router>{' '}
			</Provider>
		);
	}
}

export default App;
