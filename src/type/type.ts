export interface BoardContent {
	id: string;
	email: string;
	title: string;
	createAt: string;
	content?: string | null;
}

export interface Board {
	id: string;
	email: string;
	title: string;
	createAt: string;
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
