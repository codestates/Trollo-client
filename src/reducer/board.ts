import { ContentTitle } from './../type/type';
import { Dispatch } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardContent } from '../type/type';
import axios from 'axios';
//  id, createAt, content=> 칸반보드, (req: email, title, res: email, title, contentId, createAt)
// 보드페이지 렌더링시 게시판 내려준다.
// 상세페이지 => 보드/:id

export const ContentsInitialState: BoardContent[] = [
	{
		id: '2',
		email: 'useong0830@gmail.com',
		title: '나의 첫번째 칸반보드!!',
		createAt: '2021-05-03',
		content: '2번의 칸반보드',
	},
	{
		id: '1',
		email: 'useong0830@gmail.com',
		title: 'Trollo에 오신 것을 환영합니다!',
		createAt: '2021-05-03',
		content: '1번의 칸반보드',
	},
];

export const Boardcontents = createSlice({
	name: 'contents',
	initialState: ContentsInitialState,
	reducers: {
		readContents: (state, { payload }: PayloadAction<BoardContent>) => {
			state.push(payload);
		},
		addContent: (state, { payload }: PayloadAction<BoardContent>) => {
			state.unshift(payload);
		},
	},
});

export const { readContents, addContent } = Boardcontents.actions;

export const axiosBoardContents = (authorization: string, LoginType: string) => {
	return async (dispatch: Dispatch<{ payload: BoardContent; type: string }>): Promise<void> => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/board`, {
				headers: {
					authorization,
					LoginType,
				},
			});

			const data = response.data;
			console.log('read', data);
			dispatch(readContents(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const axiosAddContent = (title: string, authorization: string, LoginType: string) => {
	return async (dispatch: Dispatch<{ payload: ContentTitle; type: string }>): Promise<void> => {
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
			const data = response.data;
			console.log('add', data);
			dispatch(addContent(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const selectedContentSlice = createSlice({
	name: 'selectedContent',
	initialState: null as string | null,
	reducers: {
		select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
	},
});

export const { select: selectContentAction } = selectedContentSlice.actions;

// edit: (state, { payload }: PayloadAction<{ id: string; title: string }>) => {
// 	const index = state.findIndex(content => content.id === payload.id);
// 	if (index === -1) {
// 		state[index].title = payload.title;
// 	}
// },
// remove: (state, { payload }: PayloadAction<{ id: string }>) => {
// 	const index = state.findIndex(content => content.id === payload.id);
// 	if (index === -1) {
// 		state.splice(index, 1);
// 	}
// },
