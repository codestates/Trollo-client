import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from './DataTable';
import { BoardState } from '../../../type/type';
import { BoardNotice } from './Structure/styles';
import { getLoginInfoSelector } from '../../../reducer/accessToken';
import { axiosBoardContents } from '../../../reducer/board';

const Table = (): JSX.Element => {
	const contents = useSelector((state: BoardState) => state.content);
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
				accessor: 'id',
				Header: '번호',
			},
			{
				accessor: 'email',
				Header: '작성자',
			},
			{
				accessor: 'title',
				Header: '제목',
			},
			{
				accessor: 'createAt',
				Header: '등록일',
			},
		],
		[],
	);

	return (
		<>
			<div>
				<BoardNotice>📢 칸반보드를 공유하고 트롤로 회원들과 소통하는 공간입니다!</BoardNotice>
				<DataTable columns={columns} data={contents} />
			</div>
		</>
	);
};

export default Table;
