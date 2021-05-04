import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getLoginInfo } from './accessToken';
import { Boardcontents } from './board';
import { taskSlice } from './workspace';

export const reducer = combineReducers({
	content: Boardcontents.reducer,
	getLoginInfo: getLoginInfo.reducer,
	TaskData: taskSlice.reducer,
});

const persistConfig = {
	key: 'root',
	// localStorage에 저장합니다.
	storage,
	// auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
	whitelist: ['getLoginInfo'],
	// blacklist -> 그것만 제외합니다
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer: persistedReducer,
	middleware,
});
