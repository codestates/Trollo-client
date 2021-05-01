import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { AccessToken, AuthorizationCode, AuthState, LoginData } from '../type/type';
import { axiosRequest } from '../utils/axios';

const LoginInitialState: AuthState = {
	email: '',
	authorizationCode: null,
	accessToken: null,
	error: '',
	message: '',
	isLoggedIn: false,
};

export const loginUser = createSlice({
	name: 'login',
	initialState: LoginInitialState,
	reducers: {
		mailerLogin: (state, { payload }: PayloadAction<LoginData>) => {
			const axios = axiosRequest('post', '/mail', payload);
		},
		githubLogin: (state, { payload }: PayloadAction<AccessToken>) => {
			state.isLoggedIn = true;
			state.accessToken = payload;
		},
		logout: state => {
			state.isLoggedIn = false;
			state.accessToken = null;
		},
		getAccessTokenPending: state => {
			state.isLoggedIn = false;
		},
		getAccessTokenSuccess: (state, { payload }: PayloadAction<string>) => {
			state.isLoggedIn = true;
			state.email = payload;
		},
		getAccessTokenFailure: state => {
			state.isLoggedIn = false;
		},
	},
});

export const { mailerLogin: mailerLoginAciton, githubLogin: GithubLoginAction } = loginUser.actions;

export const {
	getAccessTokenPending,
	getAccessTokenSuccess,
	getAccessTokenFailure,
	logout: logoutAction,
} = loginUser.actions;

export const fetchMailLogin = ({ email }: LoginData) => {
	return async (dispatch: Dispatch<any>) => {
		dispatch(getAccessTokenPending());
		try {
			const response = await axios.post('http://8e4d052f7b39.ngrok.io/emailauth', { email });
			const data = response.data;
			dispatch(getAccessTokenSuccess(data));
		} catch (error) {
			dispatch(getAccessTokenFailure());
		}
	};
};

// export const githubLogin = createSlice({
// 	name: 'githubLogin',
// 	initialState: LoginInitialState,
// 	reducers: {
// 		githubPending: state => {
// 			state.isLoggedIn = false;
// 		},
// 		githubSuccess: (state, { payload }: PayloadAction<AccessToken>) => {
// 			state.isLoggedIn = true;
// 			state.accessToken = payload;
// 		},
// 		githubFailure: state => {
// 			state.isLoggedIn = false;
// 		},
// 	},
// });

// export const { githubPending, githubSuccess, githubFailure } = githubLogin.actions;

// export const fetchGithubLogin = () => {
// 	return async (dispatch: Dispatch<any>) => {
// 		dispatch(githubPending());

// 		try {
// 			const response = await axios.post(
// 				'http://8e4d052f7b39.ngrok.io/', { authorizationCode }
// 			)
// 			const data = response.data;
// 			dispatch(githubSuccess(data));
// 		} catch(error) {
// 			dispatch(githubFailure());
// 		}
// 	}
// }

export default loginUser.reducer;
