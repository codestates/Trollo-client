import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';
import { BoardContent } from '../type/type';
//  id, createAt, content=> 칸반보드, (req: email, title, res: email, title, contentId, createAt)
// 보드페이지 렌더링시 게시판 내려준다.
// 상세페이지 => 보드/:id
export const ContentInitialState: BoardContent[] = [
	{
		id: '1',
		email: 'useong0830@gmail.com',
		title: '안녕하세요! 첫번째 게시글입니다.',
		content: '게시글 test 입니다.',
		createAt: '2021-04-28',
		isComplate: true,
	},
	{
		id: '2',
		email: 'trollo@naver.com',
		title: 'Trollo 정식 서비스 오픈!',
		content: '는 훼이크',
		createAt: '2021-04-28',
		isComplate: true,
	},
	{
		id: '3',
		email: 'test@naver.com',
		title: 'test 게시글',
		content: 'test 입니다',
		createAt: '2021-04-29',
		isComplate: true,
	},
];

export const contentSlice = createSlice({
	name: 'content',
	initialState: ContentInitialState,
	reducers: {
		create: {
			reducer: (
				state,
				{
					payload,
				}: PayloadAction<{
					id: string;
					email: string;
					title: string;
					content: string;
					createAt: string;
					isComplate: boolean;
				}>,
			) => {
				state.push(payload);
			},
			prepare: ({
				email,
				title,
				content,
				createAt,
			}: {
				email: string;
				title: string;
				content: string;
				createAt: string;
			}) => ({
				payload: {
					id: uuid(),
					email,
					title,
					content,
					createAt,
					isComplate: false,
				},
			}),
		},
		edit: (state, { payload }: PayloadAction<{ id: string; title: string }>) => {
			const index = state.findIndex(content => content.id === payload.id);
			if (index === -1) {
				state[index].title = payload.title;
			}
		},
		remove: (state, { payload }: PayloadAction<{ id: string }>) => {
			const index = state.findIndex(content => content.id === payload.id);
			if (index === -1) {
				state.splice(index, 1);
			}
		},
	},
});

export const selectedContentSlice = createSlice({
	name: 'selectedContent',
	initialState: null as string | null,
	reducers: {
		select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
	},
});

export const {
	create: createContentAction,
	edit: editContentAction,
	remove: deletedContentAction,
} = contentSlice.actions;

export const { select: selectContentAction } = selectedContentSlice.actions;
