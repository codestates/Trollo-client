import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { contentSlice, selectedContentSlice } from './board';
// import { mailLogin } from './authorization';
import getAccessToken from './accessToken';
import { taskSlice } from './workspace';

export const reducer = combineReducers({
	content: contentSlice.reducer,
	selectedContent: selectedContentSlice.reducer,
	// auth: mailLogin.reducer,
	getAccessToken,
	TaskData: taskSlice.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
