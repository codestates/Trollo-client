import { combineReducers, createSlice, PayloadAction, getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import logger from 'redux-logger';
import { AccessToken, AuthorizationCode, AuthState, LoginData } from '../type/type';
import { axiosRequest } from '../utils/axios';

const LoginInitialState: AuthState = {
	email: '',
	authorizationCode: null,
	accessToken: null,
	error: '',
	message: '',
};

export const loginUser = createSlice({
	name: 'login',
	initialState: LoginInitialState,
	reducers: {
		mailerLogin: (state, { payload }: PayloadAction<LoginData>) => {
			const axios = axiosRequest('post', '/mail', payload);
		},
		githubLogin: (state, { payload }: PayloadAction<AuthorizationCode>) => {
			const axios = axiosRequest('post', '/loginOAuthGithub', payload).then(res => {
				console.log(payload);
			});
		},
	},

	// axios.post('http://0ea79ecb3e9f.ngrok.io/loginOAuthGithub', payload).then(res => {
	// 	console.log(state);
	// 	// state.accessToken = res.data.accessToken;
	// });
	// .then(res => (state.accessToken = res.data.accessToken));
	// return state.accessToken;

	// oauthLogin: (state, { payload }: PayloadAction<{ authorizationCode: AuthorizationCode }>) => {
	// 	const axios = axiosRequest('post', '/loginOAuthGoogle', payload.authorizationCode);
	// 	state.authorizationCode = axios.authorizationCode;
	// },
	// logout: state => {
	// 	const axios = axiosRequest('get', '/logout', undefined);
	// 	if (axios.message === 'success logout') {
	// 		state.user = null;
	// 	}
	// },
});

export const {
	mailerLogin: mailerLoginAciton,
	githubLogin: githubLoginAction,
	// logout: logoutAction,
} = loginUser.actions;
