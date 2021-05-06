import React from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { getContentsData } from '../../../reducer/board';
import { useSelector } from 'react-redux';
import { BoardContent } from '../../../type/type';
import { useHistory } from 'react-router';
import {
	Table,
	TableHeaderWrapper,
	TableRow,
	TableBody,
	TableHeader,
	TableColumnUser,
	TableColumnTitle,
	TableColumnDate,
	TableTitle,
} from './styles';

interface DataTable {
	accessor: string;
	Header: string;
}

interface Props {
	columns: any;
	data: BoardContent[];
}

const DataTable = ({ columns, data }: Props): JSX.Element => {
	const contents = useSelector(getContentsData);
	const history = useHistory();
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{ columns, data },
		useGlobalFilter,
		usePagination,
	);

	const onBoardDetail = (index: number): void => {
		history.push(`/board/${contents[index].id}`);
	};

	return (
		<>
			<Table {...getTableProps()}>
				<TableHeaderWrapper>
					{headerGroups.map((headerGroup, index: number) => (
						<TableHeader {...headerGroup.getHeaderGroupProps()} key={index}>
							{headerGroup.headers.map((column, index: number) => (
								<TableTitle {...column.getHeaderProps()} key={index}>
									{column.render('Header')}
								</TableTitle>
							))}
						</TableHeader>
					))}
				</TableHeaderWrapper>
				<TableBody {...getTableBodyProps()}>
					{rows.map((row, index: number) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()} key={index} onClick={() => onBoardDetail(index)}>
								<TableColumnUser>{contents[index].writer.split('@')[0]}</TableColumnUser>
								<TableColumnTitle>{contents[index].title}</TableColumnTitle>
								<TableColumnDate>{contents[index].createdAt.split('T')[0]}</TableColumnDate>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
};

export default DataTable;
