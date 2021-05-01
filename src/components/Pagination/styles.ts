import styled from '@emotion/styled';

export const PageWrapper = styled.nav`
	display: flex;
	width: 100px;
	height: 100px;
`;

export const PageUl = styled.ul`
	float: left;
	list-style: none;
	text-align: center;
	border-radius: 3px;
	color: white;
	padding: 1px;
	border-top: 3px solid #186ead;
	border-bottom: 3px solid #186ead;
	background-color: rgba(0, 0, 0, 0.4);
`;

export const PageLi = styled.li`
	display: inline-block;
	font-size: 17px;
	font-weight: 600;
	padding: 5px;
	border-radius: 5px;
	width: 25px;
	&:hover {
		cursor: pointer;
		color: white;
		background-color: #263a6c;
	}
	&:focus::after {
		color: white;
		background-color: #263a6c;
	}
`;

export const PageNext = styled.a`
	&:hover::after,
	&:focus::after {
		border-radius: 100%;
		color: white;
		background-color: #263a6c;
	}
`;
