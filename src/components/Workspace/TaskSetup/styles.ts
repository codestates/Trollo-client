import styled from '@emotion/styled';

export const TaskSetupContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const TaskSetupModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 600px;
	background: #fff;
	border-left: 1px solid #ddd;
	padding: 20px;
`;

export const TitleInput = styled.input`
	width: 100%;
	height: 50px;
	padding: 0 10px;
	margin-bottom: 20px;
	font-family: NanumSquareB;
	font-size: 24px;
	border-bottom: 1px solid #ccc;
`;
