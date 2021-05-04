import { getLoginInfo } from './accessToken';
import { logger } from 'redux-logger';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { Boardcontents } from './board';
import { taskSlice } from './workspace';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['getLoginInfo'],
	//blackList -> 그것만 제외한다.
};

export const reducer = combineReducers({
	getLoginInfo: getLoginInfo.reducer,
	TaskData: taskSlice.reducer,
	Boardcontents: Boardcontents.reducer,
	// selectedContentSlice: selectedContentSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer: persistedReducer,
	middleware,
});
