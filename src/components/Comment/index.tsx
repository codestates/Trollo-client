import React from 'react';
import {
	CommentArea,
	CommentDetail,
	CommentsWrapper,
	CommnetCount,
	CommentInput,
	GobackButton,
	UploadContentButton,
	CommentUpdateButton,
	CommentUserProfile,
	CommentUserId,
	CommentCreatedAt,
	InfoData,
	CommentInfo,
	DeleteComment,
	ShowComment,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginInfoSelector } from '../../reducer/accessToken';
import { useParams } from 'react-router';
import { axiosComment, axiosDeleteComment } from '../../reducer/comment';
import useInput from '../../hooks/useInput';
import { addCommentAll, deleteCommentAll, getContentDetailData } from '../../reducer/board_detail';
import { CommentAll } from '../../type/type';
import gravatar from 'gravatar';
import { HiOutlineTrash } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

const Comment = ({ commentAll }: { commentAll: CommentAll[] }): JSX.Element => {
	const dispatch = useDispatch();
	const [comment, onChangeComment, setComment] = useInput<string>('');
	const userInfo = useSelector(getLoginInfoSelector);
	const { id } = useParams<{ id?: string }>();
	const history = useHistory();
	const commentAccessToken = useSelector(getLoginInfoSelector);
	const authorization = `Bearer ${commentAccessToken.accessToken}`;
	const contentData = useSelector(getContentDetailData);
	const LoginType = commentAccessToken.LoginType;
	const board_id = Number(id);

	const onCommentSubmit = (): void => {
		const comment_body = comment;
		const parent_id = null;

		if (comment.trim() === '') {
			return;
		}

		const commentFrame = {
			board_id,
			_id: '',
			user_id: null,
			user_email: userInfo.email,
			comment_body,
			createdAt: '',
			updatedAt: '',
			parent_id,
		};

		dispatch(axiosComment(authorization, LoginType, comment_body, parent_id, board_id));
		dispatch(addCommentAll(commentFrame));
		setComment('');
	};

	const onGoback = () => {
		history.push('/board');
	};

	const onDeleteComment = (index: number): void => {
		const comment_id = commentAll[index]._id;
		dispatch(axiosDeleteComment(authorization, LoginType, comment_id, board_id));
		dispatch(deleteCommentAll(index));
	};

	return (
		<CommentsWrapper>
			<CommnetCount>{commentAll.length}?????? ??????</CommnetCount>
			<CommentArea>
				<CommentInput value={comment} onChange={onChangeComment} placeholder="????????? ???????????????" />
				<CommentUpdateButton>
					<GobackButton onClick={onGoback}>???????????? ????????????</GobackButton>
					<UploadContentButton onClick={onCommentSubmit}>?????? ??????</UploadContentButton>
				</CommentUpdateButton>
			</CommentArea>
			{commentAll.map((commentItem, index: number) => (
				<CommentDetail key={index}>
					<InfoData>
						<CommentUserProfile src={gravatar.url('trollo@gmail.com', { s: '48px', d: 'retro' })} />
						<CommentInfo>
							<CommentUserId>
								{commentItem.user_email.split('@')[0]}
								{contentData.writer === userInfo.email ||
								commentItem.user_email === userInfo.email ? (
									<DeleteComment onClick={() => onDeleteComment(index)}>
										<HiOutlineTrash />
									</DeleteComment>
								) : null}
							</CommentUserId>
							<CommentCreatedAt>{commentItem.createdAt.split('T')[0]}</CommentCreatedAt>
						</CommentInfo>
					</InfoData>
					<ShowComment>{commentItem.comment_body}</ShowComment>
				</CommentDetail>
			))}
		</CommentsWrapper>
	);
};

export default Comment;
