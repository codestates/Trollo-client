import styled from '@emotion/styled';

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// position: relative;
// top: 135px;

export const TableContainer = styled.div`
	position: relative;
	top: 180px;
	height: 500px;
`;

export const Table = styled.table`
	position: absolute;
	left: 0;
	right: 0;
	margin-auto;
	width: 1000px;
	height: 500px;
	border-collapse: collapse;
	max-height: 800px;
	margin: 0 auto;
	line-height: 1.5;
`;

export const BoardNotice = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 1000px;
	color: #8b919a;
	text-align: left;
	margin: 10px;
`;

export const Tbody = styled.tbody`
	position: absolute;
	top: 50px;
`;

export const Tr = styled.tr`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	background-color: #f9fafc;
	position: absolute;
	left: 0;
	right: 0;
`;

export const TableHeader = styled.th`
	padding: 0;
	font-size: 16px;
	padding: 10px;
	font-weight: bold;
	color: #369;
`;

export const Column = styled.td`
	padding: 10px;
	width: 1000px;
`;

export const Row = styled.tr`
	padding: 10px;
	border-bottom: 1px solid #ccc;
	&:hover {
		background-color: #eceaea;
		cursor: pointer;
	}
`;
