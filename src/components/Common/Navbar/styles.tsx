import styled from '@emotion/styled';
// #eae6ff;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 56px;
	padding: 0.8rem 1.6rem;
	background-color: #fff;
	color: #2a3856;
	font-weight: bold;
	position: fixed;
	z-index: 10;
`;

export const Logo = styled.img`
	margin-top: 4px;
`;

export const ProfileImg = styled.img`
	border-radius: 100%;
`;

export const LogoutButton = styled.div`
	margin-top: 4px;
	text-decoration: none;
	&:hover {
		cursor: pointer;
		color: #fc7d13;
	}
`;

export const BoardOrWorkspace = styled.div`
	margin-top: 2px;
	color: #2a3856;
	font-weight: bold;
`;

export const Divider = styled.span`
	margin: 0 28px;
`;
