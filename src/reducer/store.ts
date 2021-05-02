import { getLoginInfo } from './accessToken';
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { contentSlice, selectedContentSlice } from './board';
import { taskSlice } from './workspace';

export const reducer = combineReducers({
	content: contentSlice.reducer,
	selectedContent: selectedContentSlice.reducer,
	getLoginInfo: getLoginInfo.reducer,
	TaskData: taskSlice.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
