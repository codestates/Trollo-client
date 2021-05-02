import styled from '@emotion/styled';

export const MoreBtnContainer = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	width: 16px;
	height: 16px;
`;

export const Dot = styled.span`
	display: block;
	width: 4px;
	height: 4px;
	background-color: #a8a8a8;
	border-radius: 100%;
	margin: 0 auto;

	:nth-child(2) {
		margin: 2px auto;
	}
`;

export const MoreMenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 40px;
	right: -5px;
	width: 70px;
	height: 30px;
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 3px;

	& > button {
		color: red;
		background-color: #fff;
	}
`;
