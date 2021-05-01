export interface BoardContent {
	id: string;
	email: string;
	title: string;
	content: string;
	createAt: string;
	isComplate: boolean;
}

export interface BoardState {
	content: BoardContent[];
	selectedContent: string | null;
}

export interface LoginData {
	email: string;
}

export interface AuthorizationCode {
	authorizationCode?: string | null;
}

export interface AccessToken {
	accessToken?: string;
}

export interface AuthState {
	email: string;
	authorizationCode: AuthorizationCode | null;
	accessToken: AccessToken | null;
	error: string;
	message: string;
}
