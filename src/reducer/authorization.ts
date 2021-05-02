import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../type/type';

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
		logout: state => {
			state.isLoggedIn = false;
			state.accessToken = null;
		},
	},
});

export const { logout: logoutAction } = loginUser.actions;

export default loginUser.reducer;
