import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	axiosContentDetail,
	axiosContentDetailDelete,
	getContentDetailData,
} from '../../reducer/board_detail';
import gravatar from 'gravatar';
import {
	Container,
	ContentCreatedAt,
	ContentDelete,
	ContentView,
	ContentWrapper,
	ContentWriter,
	ContentTitle,
	ContentMainBoard,
	ContentWirterProfile,
	ContetnUserInfo,
	UpdataButton,
	ContentEdit,
} from './styles';
import { getLoginInfoSelector } from '../../reducer/accessToken';
import Comment from '../Comment';
import DragAndDropArea from '../Workspace/DragAndDropArea';

const BoardDetail = (): JSX.Element => {
	const history = useHistory();
	const contentData = useSelector(getContentDetailData);
	const userInfo = useSelector(getLoginInfoSelector);
	const contentAccessToken = useSelector(getLoginInfoSelector);

	const dispatch = useDispatch();

	const { id } = useParams<{ id?: string }>();
	const authorization = `Bearer ${contentAccessToken.accessToken}`;
	const LoginType = contentAccessToken.LoginType;
	const board_id = Number(id);
	const writer = contentData.writer?.split('@')[0];
	const date = contentData.createdAt?.split('T')[0];

	useEffect(() => {
		dispatch(axiosContentDetail(authorization, LoginType, board_id));
	}, []);

	const onDelete = (): void => {
		dispatch(axiosContentDetailDelete(authorization, LoginType, board_id));
		history.push('/board');
		alert('해당 게시글이 삭제 되었습니다.');
	};

	return (
		<Container>
			<ContentWrapper>
				<ContentTitle>{contentData.title}</ContentTitle>
				<ContetnUserInfo>
					<ContentWirterProfile
						src={gravatar.url('trollo@gmail.com', { s: '32px', d: 'retro' })}
						alt={'trollo'}
					/>
					<ContentWriter>{writer}</ContentWriter>
					<ContentCreatedAt>{date}</ContentCreatedAt>
				</ContetnUserInfo>
			</ContentWrapper>

			{contentData.writer === userInfo.email ? (
				<UpdataButton>
					<ContentEdit>수정</ContentEdit>
					<ContentDelete onClick={onDelete}>삭제</ContentDelete>
				</UpdataButton>
			) : null}
			<ContentMainBoard>
				<DragAndDropArea />
			</ContentMainBoard>
			<Comment commentAll={contentData.commentAll} />
		</Container>
	);
};

export default BoardDetail;
