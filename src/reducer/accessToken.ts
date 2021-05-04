import { RootStateOrAny } from 'react-redux';
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
interface LoginInfo {
	[index: string]: string;
}

const LoginInfoState: LoginInfo = {
	LoginType: '',
	accessToken: '',
	email: '',
};

export const getLoginInfo = createSlice({
	name: 'loginInfo',
	initialState: LoginInfoState,
	reducers: {
		getLoginInfoSuccess: (state, { payload }: PayloadAction<LoginInfo>) => payload,
	},
});

export const { getLoginInfoSuccess } = getLoginInfo.actions;

export const axiosLoginInfo = (
	endpoint: string,
	authorizationCode: string | null,
	email: string | null,
) => {
	return async (dispatch: Dispatch<{ payload: LoginInfo; type: string }>): Promise<void> => {
		try {
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/${endpoint}`, {
				authorizationCode,
				email,
			});
			const data = response.data;
			dispatch(getLoginInfoSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getLoginInfoSelector = (state: RootStateOrAny): LoginInfo => state.getLoginInfo;
