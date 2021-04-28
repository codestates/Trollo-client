import styled from '@emotion/styled';

export const Table = styled.table`
	align-items: center;
	text-align: center;
	height: 500px;
	width: 60%;
	position: absolute;
	left: 50%;
	top: 90%;
	transform: translate(-50%, -50%);
`;

export const TableHeader = styled.td`
	padding: 0;
	font-size: 16px;
	padding: 10px 5px;
	font-weight: bold;
`;

export const Column = styled.td`
	padding: 10px 5px;
`;

export const Row = styled.tr`
	&:hover {
		background-color: #eceaea;
		cursor: pointer;
	}
`;
