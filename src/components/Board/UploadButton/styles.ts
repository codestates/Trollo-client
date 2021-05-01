import styled from '@emotion/styled';

export const ModalBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 10;
`;

export const ModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	width: 600px;
	height: 200px;
	margin: 0 auto;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	z-index: 100;
	border-radius: 5px;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;

	botton {
		padding: 10px 24px;
		background: #141414;
		color: #0065ff;
		border: none;
	}
`;

export const ModalTitle = styled.span`
	font-size: 20px;
	font-weight: 700;
`;

export const CloseModalButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	color: #4b5563;
	font-size: 20px;
`;

export const ModalForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ModalLabel = styled.label``;

export const ModalInput = styled.input`
	margin: 24px 0 20px 0;
	width: 480px;
	height: 40px;
	border-radius: 5px;
	border: 0.5px solid #b2c0cc;
	color: black;
	padding: 12px;
	padding-top: 12px;
	padding-bottom: 12px;
	font-size: 14px;
	&:focus {
		border: 2px solid #0065ff;
	}
`;

export const Button = styled.button`
	width: 100px;
	height: 32px;
	color: #fff;
	font-weight: bold;
	border-radius: 5px;
	background: #0065ff;
`;
