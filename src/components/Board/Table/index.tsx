import React from 'react';
import SearchBar from '../SearchBar';
import TableList from './TableList';

const Table = (): JSX.Element => {
	return (
		<>
			<SearchBar />
			<TableList />
		</>
	);
};

export default Table;
