import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
		</ThemeProvider>
	);
};

export default App;
