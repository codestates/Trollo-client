import styled from '@emotion/styled';

export const WorksapceContainer = styled.div`
	width: 100%;
	height: calc(100vh - 56px);
	padding: 40px;
	margin-top: 56px;
`;

export const DragAndDropContainer = styled.div`
	display: flex;
`;

export const AddTaskListBtn = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	min-width: 300px;
	height: 50px;
	padding: 0 20px;
	font-family: NanumSquareB;
	font-size: 17px;
	background-color: rgba(0, 0, 0, 0.15);
`;

export const AddTaskListTitleInput = styled.input`
	width: 300px;
	height: 50px;
	padding: 0 20px;
	font-family: NanumSquareB;
	font-size: 17px;
	border: 2px solid rgba(0, 0, 0, 0.15);
`;
