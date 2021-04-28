import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

export const SearchBarWrapper = styled.div`
	align-items: center;
	text-align: center;
	height: 500px;
	width: 60%;
	position: absolute;
	left: 50%;
	top: 80%;
	transform: translate(-50%, -50%);
`;

export const UploadButton = styled.span`
	background-color: #fff;
	border-radius: 5px;
`;

export const ModalBackground = styled.div`
	width: 300%;
	height: 300%;
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	position: relative;
	border-radius: 10px;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;
	z-index: 1001;

	botton {
		padding: 10px 24px;
		background: #141414;
		color: #fff;
		border: none;
	}
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;
