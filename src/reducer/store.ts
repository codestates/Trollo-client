import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { contentSlice, selectedContentSlice } from './board';
// import { mailLogin } from './authorization';
import getAccessToken from './accessToken';

export const reducer = combineReducers({
	content: contentSlice.reducer,
	selectedContent: selectedContentSlice.reducer,
	// auth: mailLogin.reducer,
	getAccessToken,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
