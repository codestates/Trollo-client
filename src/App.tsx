import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import Login from './Pages/LogIn/LogIn';
import Register from './Pages/LogIn/Register';
import Board from './Pages/Board/index';
// import Workspace from './Pages/Workspace/index';
import Content from './Pages/Content/index';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<Switch>
				<Redirect exact path="/" to="/Login" />
				<Route path="/Login" component={Login} />
				<Route path="/Register" component={Register} />
				<Route exact path="/Board/:Board" component={Board} />
				{/* <Route path="/Workspace/:Workspace" component={Workspace} /> */}
				<Route path="/Board/Board/:id" component={Content} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
