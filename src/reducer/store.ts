import { ContentDetailData } from './board_detail';
import { CommentData } from './comment';
import { getLoginInfo } from './accessToken';
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { Boardcontents } from './board';
import { taskSlice } from './workspace';

export const reducer = combineReducers({
	getLoginInfo: getLoginInfo.reducer,
	TaskData: taskSlice.reducer,
	Boardcontents: Boardcontents.reducer,
	ContentDetailData: ContentDetailData.reducer,
	CommentData: CommentData.reducer,
	// selectedContentSlice: selectedContentSlice.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
});
