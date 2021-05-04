import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import Login from './pages/LogIn/LogIn';
import Register from './pages/LogIn/Register';
import Board from './pages/Board/index';
import Content from './pages/Content/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import Worksapce from './pages/Workspace';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<Switch>
				<Redirect exact path="/" to="/login" />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route exact path="/board" component={Board} />
				<Route path="/board/:id" component={Content} />
				<Route path="/workspace" component={Worksapce} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
