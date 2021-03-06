import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from './DataTable';
import { axiosBoardContents, getContentsData } from '../../../reducer/board';
import { TableContainer, BoardNotice, TableListTitle } from './styles';

const Table = (): JSX.Element => {
	const contents = useSelector(getContentsData);
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(axiosBoardContents());
		}, 1);
	}, []);

	const columns = useMemo(
		() => [
			{
				accessor: 'writer',
				Header: '',
			},
		],
		[],
	);

	return (
		<>
			<TableContainer>
				<BoardNotice>๐ข ์นธ๋ฐ๋ณด๋๋ฅผ ๊ณต์ ํ๊ณ  ํธ๋กค๋ก ํ์๋ค๊ณผ ์ํตํ๋ ๊ณต๊ฐ์๋๋ค!</BoardNotice>
				<TableListTitle>
					<DataTable columns={columns} data={contents} />
				</TableListTitle>
			</TableContainer>
		</>
	);
};

export default Table;
