import styled from '@emotion/styled';

export const TaskSetupContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const TaskSetupModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1010;
	width: 500px;
	height: 600px;
	padding: 20px;
	background: #fff;
	border-radius: 4px;
`;

export const Section = styled.div`
	width: 100%;
	padding: 0 10px;
	margin: 20px 0;
`;

export const TitleSection = styled(Section)`
	margin-top: 0;
	padding: 0;
	border-bottom: 1px solid #ddd;
`;
export const DescriptionSection = styled(Section)``;
export const DateSection = styled(Section)``;
export const ChecklistSection = styled(Section)``;

export const SectionTitle = styled.h3`
	margin: 10px 0;
`;

export const TitleInput = styled.input`
	width: 100%;
	height: 50px;
	padding: 0 10px;
	font-family: NanumSquareB;
	font-size: 24px;
`;

export const DescriptionTextarea = styled.textarea`
	resize: none;
	width: 100%;
	height: 70px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 3px;
`;

export const DateWrap = styled.div`
	display: flex;
`;

export const DateForm = styled.div`
	margin-right: 20px;

	& > p {
		font-size: 14px;
		margin-bottom: 5px;
	}

	& > input {
		width: 100px;
		height: 30px;
		padding: 0 10px;
		background-color: #f8f8f8;
		border-radius: 3px;

		::placeholder {
			color: #d8d8db;
		}
	}
`;

export const DateCustomBtn = styled.button`
	width: 100px;
	height: 30px;
	padding: 0 10px;
	margin-bottom: 5px;
	color: #aaa;
	font-size: 14px;
	background-color: #f5f5f5;
	border-radius: 3px;
`;

export const ChecklistInput = styled.input`
	width: 100%;
	height: 30px;
	padding: 0 10px;
	border: 1px solid #ddd;
	border-radius: 3px;

	::placeholder {
		color: #d8d8db;
	}
`;
