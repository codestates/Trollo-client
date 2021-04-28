import styled from '@emotion/styled';

export const Container = styled.div`
	width: 300px;
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
