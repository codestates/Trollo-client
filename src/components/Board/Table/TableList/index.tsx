import React from 'react';
import TableWrapper from '../Structure/TableWrapper';
import { dataList } from '../FakeData';
import TableRow from '../Structure/TableRow';
import TableColumn from '../Structure/Tablecolumn';
import { Link } from 'react-router-dom';

const TableList = (): JSX.Element => {
	return (
		<>
			<TableWrapper headersName={['글번호', '제목', '등록일']}>
				{dataList.map((item, index) => {
					return (
						<TableRow key={index}>
							<TableColumn>{item.id}</TableColumn>
							<TableColumn>
								<Link to={`/Board/Board/${item.id}`}>{item.title}</Link>
							</TableColumn>
							<TableColumn>{item.createAt}</TableColumn>
						</TableRow>
					);
				})}
			</TableWrapper>
		</>
	);
};

export default TableList;
