import React, { useEffect } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import Login from './pages/LogIn/LogIn';
import Register from './pages/LogIn/Register';
import Board from './pages/Board/index';
import Content from './pages/Content/index';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Worksapce from './pages/Workspace';
import { useDispatch } from 'react-redux';
import { axiosAccessToken } from './reducer/accessToken';

const App = (): JSX.Element => {
	const history = useHistory();
	const dispatch = useDispatch();
	const query = new URL(window.location.href);
	const authorizationCode = query.searchParams.get('authorizationCode');
	const email = query.searchParams.get('email');
	console.log(authorizationCode);

	useEffect(() => {
		if (authorizationCode && email) {
			dispatch(axiosAccessToken(authorizationCode, email));
			history.push('/workspace');
		}
	});

	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<Switch>
				<Redirect exact path="/" to="/Login" />
				<Route path="/Login" component={Login} />
				<Route path="/Register" component={Register} />
				<Route exact path="/Board/:Board" component={Board} />
				<Route path="/Board/Board/:id" component={Content} />
				<Route path="/workspace" component={Worksapce} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
