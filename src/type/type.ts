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
	selectedContent: string | null;
}

export interface LoginData {
	email: string;
}

export interface ContentTitle {
	title: string;
}
