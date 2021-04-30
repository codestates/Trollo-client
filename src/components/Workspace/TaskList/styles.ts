import styled from '@emotion/styled';

export const Container = styled.div`
	min-width: 300px;
	max-width: 300px;
	padding: 0 20px 20px;
	margin-right: 30px;
	border: 2px solid #ddd;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 0;
	& > p {
		width: 100%;
		font-family: NanumSquareB;
		font-size: 16px;
		word-wrap: break-word;
	}
`;

export const AddTaskInput = styled.input`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	margin-bottom: 20px;
	padding: 0 10px;
	font-family: NanumSquareB;
	font-size: 17px;
	border: 2px solid #ddd;
`;
