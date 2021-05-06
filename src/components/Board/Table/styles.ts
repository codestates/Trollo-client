import styled from '@emotion/styled';

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 800px;
	height: 100%;
	margin-bottom: 50px;
`;

export const BoardNotice = styled.div`
	margin-top: 40px;
	width: 800px;
	height: fit-content;
	color: #8b919a;
	text-align: left;
`;

export const Table = styled.table`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
	max-height: 1800px;
	border-collapse: collapse;
`;

export const TableListTitle = styled.div`
	margin-top: 20px;
	width: 800px;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

export const TableHeaderWrapper = styled.thead``;

export const TableHeader = styled.div`
	width: 130px;
`;

export const TableTitle = styled.th``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
	height: 30px;
	padding: 20px;
	cursor: pointer;
	&: hover {
		color: #0065ff;
	}
`;

export const TableColumnUser = styled.td`
	width: 120px;
	color: #777777;
	&: hover {
		color: #0065ff;
	}
`;

export const TableColumnTitle = styled.td`
	width: 500px;
	font-family: NanumSquareEB;
	color: #3c3c3c;
	word-break: break-all;
	&: hover {
		color: #0065ff;
	}
`;

export const TableColumnDate = styled.td`
	text-align: right;
	&: hover {
		color: #0065ff;
	}
`;
