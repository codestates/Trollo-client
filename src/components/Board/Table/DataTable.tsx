import React from 'react';
import { Link } from 'react-router-dom';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { Board } from '../../../type/type';
// import SearchBar from '../SearchBar';

// interface Data {
// 	[index: string]: string;
// }

interface DataTable {
	accessor: string;
	Header: string;
}

interface Props {
	columns: any;
	data: Board[];
}

const DataTable = ({ columns, data }: Props): JSX.Element => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{ columns, data },
		useGlobalFilter,
		usePagination,
	);

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
									<td {...cell.getCellProps()} key={index}>
										<Link to={`/Board/1`}>{cell.render('Cell')}</Link>
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
