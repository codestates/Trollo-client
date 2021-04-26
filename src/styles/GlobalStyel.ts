import { css } from '@emotion/react';

const GlobalStyle = css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}

	button,
	input,
	textarea {
		border: none;
		outline: none;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
