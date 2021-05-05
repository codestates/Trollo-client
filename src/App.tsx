import React, { useEffect } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import login from './pages/LogIn/LogIn';
import register from './pages/LogIn/Register';
import board from './pages/Board/index';
import content from './pages/Content/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import worksapce from './pages/Workspace';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginInfoSelector, getLoginInfoSuccess } from './reducer/accessToken';
import axios from 'axios';

const App = (): JSX.Element => {
	const userSelector = useSelector(getLoginInfoSelector);
	const dispatch = useDispatch();

	// axios.defaults.headers.withCredentials = true;

	useEffect(() => {
		const userInfo = JSON.parse(window.localStorage.getItem('userInfo') as string);

		if (userInfo) {
			axios.defaults.headers.common['authorization'] = `Bearer ${userInfo.accessToken}`;
			axios.defaults.headers.common['LoginType'] = userInfo.LoginType;
		}

		dispatch(getLoginInfoSuccess(userInfo));

		window.localStorage.removeItem('userInfo');
	}, []);

	window.onbeforeunload = () => {
		window.localStorage.setItem('userInfo', JSON.stringify(userSelector));
	};

	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<Switch>
				<Redirect exact path="/" to="/login" />
				<Route path="/Login" component={login} />
				<Route path="/Register" component={register} />
				<Route exact path="/Board" component={board} />
				<Route path="/Board/:id" component={content} />
				<Route path="/workspace" component={worksapce} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
