import styled from '@emotion/styled';

export const SlickWrapper = styled.div`
	margin-bottom: 120px;
	height: 300px;
	width: 100%;
	padding-top: 56px;
	max-width: 1800px;
`;

export const ImgWrapper = styled.div`
	width: 100%;
	max-height: 300px;
	overflow: hidden;

	&: focus {
		outline: none;
	}

	& img > {
		vertical-align: middle;
	}
`;

export const TaskGIF = styled.img`
	position: absolute;
	bottom: 14px;
	margin-left: 500px;
	width: 500px;
	height: 280px;
`;
