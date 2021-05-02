import { getLoginInfo } from './accessToken';
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { contentSlice, selectedContentSlice } from './board';
// import { mailLogin } from './authorization';

export const reducer = combineReducers({
	content: contentSlice.reducer,
	selectedContent: selectedContentSlice.reducer,
	getLoginInfo: getLoginInfo.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
