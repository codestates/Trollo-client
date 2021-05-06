import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardContent } from '../type/type';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';

// 보드페이지 렌더링시 게시판 내려준다.
// 상세페이지 => 보드/:id

export const ContentsInitialState: BoardContent[] = [
	{
		createdAt: '',
		id: null,
		title: '',
		updatedAt: '',
		user_id: null,
		writer: '',
	},
];

export const Boardcontents = createSlice({
	name: 'contents',
	initialState: ContentsInitialState,
	reducers: {
		readContents: (state, { payload }: PayloadAction<BoardContent[]>) => payload,
		addContent: (state, { payload }: PayloadAction<BoardContent[]>) => payload,
	},
});

export const { readContents, addContent } = Boardcontents.actions;

export const axiosBoardContents = (authorization: string, LoginType: string) => {
	return async (dispatch: Dispatch<{ payload: BoardContent[]; type: string }>): Promise<void> => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/board`, {
				headers: {
					authorization,
					LoginType,
				},
			});

			const data = response.data.boardList;
			dispatch(readContents(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const axiosAddContent = (title: string, authorization: string, LoginType: string) => {
	return async (dispatch: Dispatch<{ payload: BoardContent[]; type: string }>): Promise<void> => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/board`,
				{ title },
				{
					headers: {
						authorization,
						LoginType,
					},
				},
			);
			const data = response.data.boardList;
			dispatch(addContent(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getContentsData = (state: RootStateOrAny): BoardContent[] => state.Boardcontents;

export const selectedContentSlice = createSlice({
	name: 'selectedContent',
	initialState: null as string | null,
	reducers: {
		select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
	},
});

export const { select: selectContentAction } = selectedContentSlice.actions;
