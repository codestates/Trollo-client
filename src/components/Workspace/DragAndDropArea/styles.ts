import styled from '@emotion/styled';
import { BiTrash } from 'react-icons/bi';

export const WorksapceContainer = styled.div`
	overflow: hidden;
	padding-top: 56px;
`;

export const DragAndDropContainer = styled.div`
	overflow-x: auto;
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: calc(100vh - 56px);
	padding: 40px;

	background: linear-gradient(
		to right,
		#be93c5,
		#7bc6cc
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const AddTaskListBtn = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	width: 300px;
	min-width: 300px;
	height: 50px;
	padding: 0 20px;
	font-family: NanumSquareB;
	color: #fff;
	font-size: 17px;
	background-color: #478bff;
	border-radius: 4px;
`;

export const AddTaskListTitleInput = styled.input`
	width: 300px;
	min-width: 300px;
	height: 50px;
	padding: 0 20px;
	font-family: NanumSquareB;
	font-size: 17px;
	border: 8px solid #478bff;
	border-radius: 4px;
`;

export const Trash = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 300px;
	height: 200px;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

export const TrashIcon = styled(BiTrash)`
	width: 100px;
	height: 100px;
	color: #333;
`;

export const Loading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: 100vh;
	font-family: NanumSquareEB;
	font-size: 25px;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.3);
`;
