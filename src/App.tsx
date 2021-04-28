import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import { Route, Switch } from 'react-router-dom';
import Worksapce from './pages/Workspace';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<Switch>
				<Route path="/workspace" component={Worksapce} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
