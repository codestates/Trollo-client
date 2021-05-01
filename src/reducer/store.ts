import { loginUser } from './authorization';
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { contentSlice, selectedContentSlice } from './board';

export const reducer = combineReducers({
	content: contentSlice.reducer,
	selectedContent: selectedContentSlice.reducer,
	auth: loginUser.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
