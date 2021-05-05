import { BoardContentDetail } from './../type/type';
import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';

export const ContentDetailInitialState: BoardContentDetail = {
	commentAll: null,
	id: null,
	writer: '',
	title: '',
	createdAt: '',
	content: {
		tasklist: [
			{
				tasklist_id: null,
				title: '',
				items: [
					{
						task_id: null,
						title: '',
						checklist: [
							{
								isChecked: false,
								content: '',
							},
						],
						start_date: '',
						end_date: '',
					},
				],
			},
		],
	},
};

export const ContentDetailData = createSlice({
	name: 'content_detail',
	initialState: ContentDetailInitialState,
	reducers: {
		readContent: (state, { payload }: PayloadAction<BoardContentDetail>) => payload,
		deleteContent: (state, { payload }: PayloadAction<BoardContentDetail>) => payload,
	},
});

export const { readContent, deleteContent } = ContentDetailData.actions;

export const axiosContentDetail = (
	authorization: string,
	LoginType: string,
	board_id: number,
): any => {
	return async (
		dispatch: Dispatch<{ payload: BoardContentDetail; type: string }>,
	): Promise<void> => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/board/${board_id}`, {
				headers: {
					authorization,
					LoginType,
				},
			});
			const data = response.data;
			console.log('상세페이지 응답 데이터', data);
			dispatch(readContent(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const axiosContentDetailDelete = (
	authorization: string,
	LoginType: string,
	board_id: number,
): any => {
	return async (
		dispatch: Dispatch<{ payload: BoardContentDetail; type: string }>,
	): Promise<void> => {
		try {
			const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/board/${board_id}`, {
				headers: {
					authorization,
					LoginType,
				},
			});
			const data = response.data;
			dispatch(deleteContent(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getContentDetailData = (state: RootStateOrAny): BoardContentDetail =>
	state.ContentDetailData;
