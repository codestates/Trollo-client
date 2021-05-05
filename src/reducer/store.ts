import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { getLoginInfo } from './accessToken';
import { Boardcontents } from './board';
import { taskSlice } from './workspace';

export const reducer = combineReducers({
	content: Boardcontents.reducer,
	getLoginInfo: getLoginInfo.reducer,
	TaskData: taskSlice.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
