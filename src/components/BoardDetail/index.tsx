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
import ViewWorkspace from '../Workspace/ViewWorkspace';

const BoardDetail = (): JSX.Element => {
	const history = useHistory();
	const contentData = useSelector(getContentDetailData);
	const userInfo = useSelector(getLoginInfoSelector);

	const dispatch = useDispatch();

	const { id } = useParams<{ id?: string }>();
	const board_id = Number(id);
	const writer = contentData.writer?.split('@')[0];
	const date = contentData.createdAt?.split('T')[0];

	useEffect(() => {
		setTimeout(() => {
			dispatch(axiosContentDetail(board_id));
		}, 100);
	}, []);

	const onDelete = (): void => {
		dispatch(axiosContentDetailDelete(board_id));
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
				<ViewWorkspace taskData={contentData.content} />
			</ContentMainBoard>
			<Comment commentAll={contentData.commentAll} />
		</Container>
	);
};

export default BoardDetail;
