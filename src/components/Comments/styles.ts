import styled from '@emotion/styled';

export const CommentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
`;

export const CommnetCount = styled.div`
	width: 700px;
	margin-bottom: 16px;
	font-weight: 600;
	font-size: 16px;
`;

export const CommentForm = styled.form`
	width: 700px;
	height: 100px;
	margin-bottom: 80px;
	padding: 16px;
	border: 0.5px solid #e9e9e9;
	border-radius: 4px;
`;

export const CommentTextarea = styled.input`
	display: inline-block;
	resize: none;
	width: 100%;
	height: auto;
	line-height: normal;
	font-size: 18px;
`;

export const CommentUpdateButton = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 74px;
	width: 684px;
`;

export const GobackButton = styled.button`
	margin-left: -16px;
	width: 100px;
	height: 32px;
	color: #777777;
	border-radius: 5px;
	border: 0.5px solid #777777;
	background: transparent;
	font-weight: 500;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	text-align: center;
`;

export const UploadContentButton = styled.button`
	width: 100px;
	height: 32px;
	color: #fff;
	border-radius: 5px;
	border: none;
	background: #0065ff;
	font-weight: 600;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	text-align: center;

	&: hover {
		background: #097eff;
	}
`;

export const CommentDetail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 700px;
	border-bottom: 0.5px solid #e9e9e9;
	text-align: left;
`;

export const ContentOfComment = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 700px;
	margin: 0 auto;
	text-align: left;
`;

export const CommentUserProfile = styled.img`
	border-radius: 100%;
	height: 40px;
`;

export const CommentData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 16px;
	height: 50px;
	text-align: left;
`;

export const CommentUserId = styled.div`
	margin-bottom: 8px;
	width: 700px;
	color: #3c3c3c;
	font-size: 16px;
	font-weight: 600;
`;

export const Comment = styled.div`
	display: flex;
	margin-right: 52px;
	width: 650px;
	text-align: left;
`;

export const CommentOther = styled.div`
	margin-bottom: 40px;
	width: 590px;
	font-size: 14px;
`;

export const AddCommentChildren = styled.span`
	background-color: transparent;
	margin-right: 4px;
`;

export const CommentCreatedAt = styled.span`
	margin: 0 4px 0 12px;
	color: #777777;
`;

export const CommentChildren = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AddButtonWrapper = styled.span`
	display: flex;
	margin-right: 16px;
	cursor: pointer;
	color: #0065ff;
	font-weight: 600;
	&: hover {
		color: #097eff;
	}
`;

export const DeleteComment = styled.div`
	background-color: transparent;
	color: #ea092e;
	cursor: pointer;
`;

export const Children = styled.div`
	margin-top: 16px;
	padding: 10px 0 0 20px;
	height: 100%;
	width: 640px;
	background-color: rgba(0, 0, 0, 0.016);
	border: 1px solid rgba(0, 0, 0, 0.02);
`;

export const CommentOfChildren = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 600px;
	height: 80px;
	margin: 0 auto;
	border-bottom: 1px solid #e9e9e9;
	text-align: left;
`;

export const AddCommentOfChildrenWrapper = styled.div`
	height: 60px;
`;

export const AddCommentOfChildren = styled.button`
	margin: 16px 0 0 16px;
	padding: 5px;
	width: 580px;
	background-color: transparent;
	color: #0065ff;
	border: 0.5px solid #0065ff;
	border-radius: 4px;
	font-weight: bold;

	&: hover {
		background-color: #0065ff;
		color: #fff;
	}
`;

export const CommentChildrenForm = styled.form`
	margin: 0 auto;
	width: 600px;
	height: 160px;
`;

export const CommentChildrenInput = styled.input`
	display: inline-block;
	margin-top: 16px;
	padding: 16px;
	border: 0.5px solid #e9e9e9;
	border-radius: 4px;
	width: 100%;
	height: 80px;
	line-height: normal;
`;

export const CommentChildrenButtonWrapper = styled.div`
	margin-top: 20px;
	text-align: right;
`;

export const CommentChildrenCancel = styled.button`
	margin-right: 12px;
	padding: 4px;
	width: 60px;
	background-color: rgb(134, 142, 150);
	color: #fff;
	font-weight: 600;
	border-radius: 4px;

	&: hover {
		background-color: #c1c1c1;
	}
`;

export const CommentChildrenSubmit = styled.button`
	padding: 4px;
	width: 80px;
	background-color: #0065ff;
	color: #fff;
	font-weight: 600;
	border-radius: 4px;

	&: hover {
		background: #097eff;
	}
`;
