import React from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { getContentsData } from '../../../reducer/board';
import { useSelector } from 'react-redux';
import { BoardContent } from '../../../type/type';
import { useHistory } from 'react-router';
// import SearchBar from '../SearchBar';

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
	console.log('contents', contents);
	const history = useHistory();
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{ columns, data },
		useGlobalFilter,
		usePagination,
	);

	const onBoardDetail = (): any => {
		console.log('id를 찾아줘');
		history.push(`/board/${contents[0].id}`);
	};

	return (
		<>
			{/* <SearchBar onSubmit= /> */}
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup, index: number) => (
						<tr {...headerGroup.getHeaderGroupProps()} key={index}>
							{headerGroup.headers.map((column, index: number) => (
								<th {...column.getHeaderProps()} key={index}>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, index: number) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} key={index}>
								{row.cells.map((cell, index: number) => (
									<td {...cell.getCellProps()} key={index} onClick={onBoardDetail}>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default DataTable;
