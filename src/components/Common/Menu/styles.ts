import styled from '@emotion/styled';

export const CreateMyPage = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 1000;
	& > div {
		position: absolute;
		display: inline-block;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
		min-width: 160px;
		max-height: calc(100vh - 20px);
		z-index: 512;
		padding: 12px;
		font-size: 12px;
	}
	color: #4b5563;
`;

export const CloseModalButton = styled.button`
	position: absolute;
	right: 12px;
	top: 8px;
	background: transparent;
	font-size: 20px;
`;
