import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import login from './pages/LogIn/LogIn';
import register from './pages/LogIn/Register';
import board from './pages/Board/index';
import content from './pages/Content/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import worksapce from './pages/Workspace';

const App = (): JSX.Element => {
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
