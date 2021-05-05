import { ContentDetailData } from './../reducer/board_detail';
export interface BoardContent {
	createdAt: string | null;
	id: number | null;
	title: string | null;
	updatedAt: string | null;
	user_id: number | null;
	writer: string | null;
}

export interface BoardState {
	content: BoardContent[];
	selectedContent: string;
}

export interface LoginData {
	email: string;
}

export interface BoardContentDetail {
	commentAll: CommentAll[];
	id: number | null;
	writer: string;
	title: string;
	createdAt: string;
	content: TaskData;
}

export interface CommentAllData {
	commentAll: CommentAll[];
}

export interface CommentAll {
	board_id: number | null;
	_id: string;
	user_id: number | null;
	user_email: string;
	comment_body: string;
	createdAt: string;
	updatedAt: string;
	parent_id: null;
	// children: CommentChildren[];
}

export interface CommentChildren {
	_id: string;
	user_id: number;
	user_email: string;
	comment_body: string;
	createdAt: string;
	updatedAt: string;
	parent_id: string;
	children: [];
}

export interface TaskListData {
	title: string;
	tasks: string[];
}

export interface TaskItemData {
	[index: string]: {
		title: string;
		description: string;
		start_date: string;
		end_date: string;
		checkList: { content: string; checked: boolean }[];
	};
}

export interface TaskData {
	taskList: TaskListData[];
	taskItem: TaskItemData;
}
