import { AccessToken } from './../type/type';
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

// const TokenInitialState: { accessToken: string | null } = {
// 	accessToken: null,
// };

export const getAcccessToken = createSlice({
	name: 'accessToken',
	initialState: '',
	reducers: {
		getAccessTokenSuccess: (state, { payload }: PayloadAction<string>) => payload,
	},
});

export const { getAccessTokenSuccess } = getAcccessToken.actions;

export const axiosAccessToken = (authorizationCode: string, email: string) => {
	//TODO: Dipatch type => payload: ; type:{ payload: string; type: string }
	return async (dispatch: Dispatch<{ payload: string; type: string }>): Promise<void> => {
		try {
			const response = await axios.post('http://8e4d052f7b39.ngrok.io/emailauth', {
				authorizationCode,
				email,
			});
			const data = response.data;
			console.log('성공했따!!!!!!!!!!!!', data.data);
			dispatch(getAccessTokenSuccess(data.data.accessToken));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAccessTokenSelector = (state: string): string => state;

export default getAcccessToken.reducer;
