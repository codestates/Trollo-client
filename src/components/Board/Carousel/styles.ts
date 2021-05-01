import styled from '@emotion/styled';

export const SlickWrapper = styled.div`
	margin: 0 auto;
	height: 300px;
	width: 100%;
	max-width: 1800px;
`;

export const ImgWrapper = styled.div`
	position: relative;
	width: 100%;
	max-height: 300px;
	margin-top: 56px;
	overflow: hidden;

	&: focus {
		outline: none;
	}

	& img > {
		vertical-align: middle;
	}
`;
