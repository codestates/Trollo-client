import { createSlice } from '@reduxjs/toolkit';

interface LogoutState {
	isLoggedIn: boolean;
}

const LoginInitialState: LogoutState = {
	isLoggedIn: false,
};

export const loginUser = createSlice({
	name: 'login',
	initialState: LoginInitialState,
	reducers: {
		logout: state => {
			state.isLoggedIn = false;
		},
	},
});

export const { logout: logoutAction } = loginUser.actions;

export default loginUser.reducer;
