import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<Provider store={store}>
					<App />
				</Provider>
			</PersistGate>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
