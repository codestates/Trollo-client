import styled from '@emotion/styled';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 1000px;
	height: 500px;
`;

export const Table = styled.table`
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	width: 100%;
	height: 500px;
	max-height: 800px;
	border-collapse: collapse;
`;

export const BoardNotice = styled.div`
	height: fit-content;
	color: #8b919a;
	text-align: left;
`;

export const TableBody = styled.div`
	width: 100%;
`;

export const Tr = styled.tr`
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	background-color: #f9fafc;
`;

export const TableHeader = styled.th`
	font-size: 16px;
	padding: 10px;
	font-weight: bold;
	color: #369;
`;

export const Column = styled.td`
	padding: 10px;
`;

export const Row = styled.tr`
	padding: 10px;
	border-bottom: 1px solid #ccc;
	&:hover {
		background-color: #eceaea;
		cursor: pointer;
	}
`;
