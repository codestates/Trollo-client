import { CommentAllData } from './../type/type';
import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';

export const CommentInitialState: CommentAllData = {
	commentAll: [],
};

export const CommentData = createSlice({
	name: 'comment',
	initialState: CommentInitialState,
	reducers: {
		addComment: (state, { payload }: PayloadAction<CommentAllData>) => payload,
		deleteComment: (state, { payload }: PayloadAction<CommentAllData>) => payload,
	},
});

export const { addComment, deleteComment } = CommentData.actions;

export const axiosComment = (
	authorization: string,
	LoginType: string,
	comment_body: string,
	parent_id: string | null,
	board_id: number,
) => {
	return async (dispatch: Dispatch<{ payload: CommentAllData; type: string }>): Promise<void> => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/board/${board_id}/comment`,
				{
					comment_body,
					parent_id,
				},
				{
					headers: {
						authorization,
						LoginType,
					},
				},
			);
			const data = response.data;
			console.log('댓글 데이터', data);
			dispatch(addComment(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const axiosDeleteComment = (
	authorization: string,
	LoginType: string,
	comment_id: string,
	board_id: number,
) => {
	return async (dispatch: Dispatch<{ payload: CommentAllData; type: string }>): Promise<void> => {
		console.log('삭제 요청은 하니?');
		try {
			const response = await axios.delete(
				`${process.env.REACT_APP_SERVER_URL}/board/${board_id}/${comment_id}`,
				{
					headers: {
						authorization,
						LoginType,
					},
				},
			);
			console.log('삭제 응답은 오니?');
			const data = response.data;
			console.log('삭제 후 데이터', data);
			dispatch(deleteComment(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getCommentData = (state: RootStateOrAny): CommentAllData => state.CommentData;
