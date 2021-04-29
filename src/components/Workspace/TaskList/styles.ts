import styled from '@emotion/styled';

export const Container = styled.div`
	min-width: 300px;
	padding: 0 20px 20px;
	margin-right: 30px;
	border: 2px solid #ddd;
`;

export const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	& > p {
		font-size: 18px;
	}
`;

export const AddTaskBtn = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	margin-top: 20px;
	font-size: 17px;

	&:hover {
		background-color: rgba(0, 0, 0, 0.15);
	}
`;
