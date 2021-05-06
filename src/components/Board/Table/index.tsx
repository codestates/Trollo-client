import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from './DataTable';
import { getLoginInfoSelector } from '../../../reducer/accessToken';
import { axiosBoardContents, getContentsData } from '../../../reducer/board';
import { TableContainer, BoardNotice, TableListTitle } from './styles';

const Table = (): JSX.Element => {
	const contents = useSelector(getContentsData);
	const userAccessToken = useSelector(getLoginInfoSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		const authorization = `Bearer ${userAccessToken.accessToken}`;
		const LoginType = userAccessToken.LoginType;
		dispatch(axiosBoardContents(authorization, LoginType));
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
				<BoardNotice>📢 칸반보드를 공유하고 트롤로 회원들과 소통하는 공간입니다!</BoardNotice>
				<TableListTitle>
					<DataTable columns={columns} data={contents} />
				</TableListTitle>
			</TableContainer>
		</>
	);
};

export default Table;
