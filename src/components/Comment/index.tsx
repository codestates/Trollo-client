import React from 'react';
import { CommentDetail, CommentsWrapper } from '../Comments/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginInfoSelector } from '../../reducer/accessToken';
import { useParams } from 'react-router';
import { axiosComment, axiosDeleteComment } from '../../reducer/comment';
import useInput from '../../hooks/useInput';
import { addCommentAll, deleteCommentAll } from '../../reducer/board_detail';
import { CommentAll } from '../../type/type';

const Comment = ({ commentAll }: { commentAll: CommentAll[] }): JSX.Element => {
	const dispatch = useDispatch();
	const [comment, onChangeComment, setComment] = useInput<string>('');
	const userInfo = useSelector(getLoginInfoSelector);
	const { id } = useParams<{ id?: string }>();
	const commentAccessToken = useSelector(getLoginInfoSelector);
	const authorization = `Bearer ${commentAccessToken.accessToken}`;
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

	const onDeleteComment = (index: number): void => {
		const comment_id = commentAll[index]._id;
		dispatch(axiosDeleteComment(authorization, LoginType, comment_id, board_id));
		dispatch(deleteCommentAll(index));
	};

	return (
		<CommentsWrapper>
			<div>
				<input value={comment} onChange={onChangeComment} placeholder="댓글창" />
				<button onClick={onCommentSubmit}>댓글추가</button>
			</div>
			<div>
				{commentAll.map((commentItem, index: number) => (
					<CommentDetail key={index}>
						{commentItem.comment_body}
						<button onClick={() => onDeleteComment(index)}>삭제</button>
					</CommentDetail>
				))}
			</div>
		</CommentsWrapper>
	);
};

export default Comment;
