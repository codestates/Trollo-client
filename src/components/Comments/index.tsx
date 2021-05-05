import React, { useState, FormEvent, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import useInput from '../../hooks/useInput';
import {
	CommentForm,
	CommentsWrapper,
	CommentUpdateButton,
	CommnetCount,
	ContentOfComment,
	GobackButton,
	UploadContentButton,
	Comment,
	CommentTextarea,
	CommentUserProfile,
	CommentUserId,
	CommentCreatedAt,
	AddCommentChildren,
	CommentData,
	CommentOther,
	CommentDetail,
	CommentChildren,
	Children,
	AddButtonWrapper,
	AddCommentOfChildren,
	CommentOfChildren,
	CommentChildrenForm,
	CommentChildrenInput,
	CommentChildrenCancel,
	CommentChildrenSubmit,
	CommentChildrenButtonWrapper,
	AddCommentOfChildrenWrapper,
	DeleteComment,
} from './styles';
import gravatar from 'gravatar';
import { useDispatch, useSelector } from 'react-redux';
import { axiosContentDetail, getContentDetailData } from '../../reducer/board_detail';
import { getLoginInfoSelector } from '../../reducer/accessToken';
import { axiosComment, axiosDeleteComment, getCommentData } from '../../reducer/comment';
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';
import { CommentAll } from '../../type/type';

const Comments = (): JSX.Element => {
	const [addCommentChildren, setAddCommentChildren] = useState<boolean>(false);
	const [addCommentOfCommentChildren, setAddCommentOfCommentChildren] = useState<boolean>(false);
	const [comment, onChangeComment] = useInput<string>('');
	const history = useHistory();
	const commentData = useSelector(getContentDetailData);
	const commentUserDetail = useSelector(getCommentData);
	const userInfo = useSelector(getLoginInfoSelector);
	const commentInfo = commentData;
	const commentDetailInfo = commentUserDetail.commentAll;

	console.log('게시글 인포 정보', commentInfo);
	console.log('댓글 유저 정보 디테일', commentUserDetail);
	console.log('게시글 글쓴이', commentInfo.writer);
	console.log('댓글 글쓴이', commentDetailInfo);
	// console.log('대댓글', commentDetailInfo![0].children);

	const commentAccessToken = useSelector(getLoginInfoSelector);
	const dispatch = useDispatch();
	const { id } = useParams<{ id?: string }>();
	const authorization = `Bearer ${commentAccessToken.accessToken}`;
	const LoginType = commentAccessToken.LoginType;
	const board_id = Number(id);
	// console.log('댓글아이디', commentDetailInfo?[0].id);
	useEffect(() => {
		dispatch(axiosContentDetail(authorization, LoginType, board_id));
	}, []);

	const onGoback = (): void => {
		history.push('/board');
	};

	const onCommentSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const comment_body = comment;
		const parent_id = null;

		if (comment.trim() === '') {
			return;
		}
		dispatch(axiosComment(authorization, LoginType, comment_body, parent_id, board_id));
	};

	const onCommentChildrenSubmit = (e: FormEvent<HTMLFormElement>, index: number): any => {
		e.preventDefault();
		const comment_body = comment;
		const parent_id = commentDetailInfo![index]._id;

		if (comment.trim() === '') {
			return;
		}
		dispatch(axiosComment(authorization, LoginType, comment_body, parent_id, board_id));
	};

	const onAddCommentChildren = useCallback((): void => {
		setAddCommentChildren(prev => !prev);
	}, []);

	const onAddCommentOfCommentChildren = useCallback((): void => {
		setAddCommentOfCommentChildren(prev => !prev);
	}, []);

	const onDeleteComment = (index: number): any => {
		const comment_id = commentDetailInfo![index]._id;
		dispatch(axiosDeleteComment(authorization, LoginType, comment_id, board_id));
	};

	return (
		<CommentsWrapper>
			<CommnetCount>{commentInfo.commentAll?.length}개의 댓글</CommnetCount>
			<CommentForm onSubmit={onCommentSubmit}>
				<CommentTextarea
					placeholder="댓글을 작성하세요"
					value={comment}
					onChange={onChangeComment}
				></CommentTextarea>
				<CommentUpdateButton>
					<GobackButton onClick={onGoback}>게시글 보기</GobackButton>
					<UploadContentButton type="submit">댓글 작성</UploadContentButton>
				</CommentUpdateButton>
			</CommentForm>
			{/* TODO: 댓글 상세 내용 */}
			{commentDetailInfo &&
				commentDetailInfo.map((commentItem: CommentAll, index: number) => (
					<CommentDetail key={index}>
						<ContentOfComment>
							<CommentUserProfile
								src={gravatar.url('trollo@gmail.com', { s: '48px', d: 'retro' })}
								alt={'trollo'}
							/>
							<CommentData>
								<CommentUserId>{commentItem.user_email.split('@')[0]}</CommentUserId>
								<Comment>{commentItem.comment_body}</Comment>
							</CommentData>
						</ContentOfComment>
						<CommentOther>
							<AddCommentChildren>
								{addCommentChildren ? (
									<CommentChildren>
										<div style={{ display: 'flex' }}>
											<AddButtonWrapper>
												<span>
													<FiMinusSquare onClick={onAddCommentChildren} />
													&nbsp; 숨기기
												</span>
												<CommentCreatedAt>{commentItem.createdAt.split('T')[0]}</CommentCreatedAt>
												{userInfo.email === commentInfo.writer ? (
													<DeleteComment onClick={() => onDeleteComment(index)}>삭제</DeleteComment>
												) : null}
											</AddButtonWrapper>
										</div>
										{/* TODO: 대댓 Yes or NO 분기점 */}
										{commentItem.children ? (
											<Children>
												{commentItem.children.map((childrenItem: any, index: number) => (
													<CommentOfChildren key={index}>
														<CommentUserProfile
															src={gravatar.url('trollo@gmail.com', { s: '48px', d: 'retro' })}
															alt={'trollo'}
														/>
														<CommentData>
															<CommentUserId>{childrenItem.user_email.split('@')[0]}</CommentUserId>
															<Comment>{childrenItem.comment_body}</Comment>
														</CommentData>
													</CommentOfChildren>
												))}
												{addCommentOfCommentChildren ? (
													<CommentChildrenForm onSubmit={e => onCommentChildrenSubmit(e, index)}>
														<CommentChildrenInput placeholder="답글을 작성하세요" />
														<CommentChildrenButtonWrapper>
															<CommentChildrenCancel onClick={onAddCommentOfCommentChildren}>
																취소
															</CommentChildrenCancel>
															<CommentChildrenSubmit type="submit">답글 작성</CommentChildrenSubmit>
														</CommentChildrenButtonWrapper>
													</CommentChildrenForm>
												) : (
													<AddCommentOfChildrenWrapper>
														<AddCommentOfChildren onClick={onAddCommentOfCommentChildren}>
															답글 작성하기
														</AddCommentOfChildren>
													</AddCommentOfChildrenWrapper>
												)}
											</Children>
										) : (
											<Children>
												<CommentChildrenForm onSubmit={e => onCommentChildrenSubmit(e, index)}>
													<CommentChildrenInput placeholder="답글을 작성하세요" />
													<CommentChildrenButtonWrapper>
														<CommentChildrenCancel onClick={onAddCommentOfCommentChildren}>
															취소
														</CommentChildrenCancel>
														<CommentChildrenSubmit type="submit">답글 작성</CommentChildrenSubmit>
													</CommentChildrenButtonWrapper>
												</CommentChildrenForm>
											</Children>
										)}
									</CommentChildren>
								) : (
									<>
										<AddButtonWrapper>
											<span onClick={onAddCommentChildren}>
												<FiPlusSquare />
												&nbsp; 답글 달기
											</span>
											<CommentCreatedAt>{commentItem.createdAt.split('T')[0]}</CommentCreatedAt>
											{userInfo.email === commentInfo.writer ? (
												<DeleteComment>삭제</DeleteComment>
											) : null}
										</AddButtonWrapper>
									</>
								)}
							</AddCommentChildren>
						</CommentOther>
					</CommentDetail>
				))}
		</CommentsWrapper>
	);
};

export default Comments;
