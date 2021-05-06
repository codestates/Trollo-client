import React, { useState, useCallback, MouseEventHandler } from 'react';
import {
	BoardOrWorkspace,
	Divider,
	Header,
	HeaderRouting,
	Logo,
	LogoutButton,
	ProfileImg,
} from './styles';
import PageLogo from '../../../images/PageLogo.png';
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import Menu from '../Menu/index';
import gravatar from 'gravatar';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../reducer/authorization';
import { getLoginInfoSelector } from '../../../reducer/accessToken';

const Navbar = (): JSX.Element => {
	const [showMyPage, setShowMyPage] = useState<boolean>(false);
	// const { Workspace } = useParams<{ Workspace?: string }>();
	const dispatch = useDispatch();
	const history = useHistory();
	const userInfo = useSelector(getLoginInfoSelector);
	// console.log(Workspace);

	const onClickMyPage = useCallback((): void => {
		setShowMyPage(prev => !prev);
	}, []);

	const onCloseMyPage: MouseEventHandler<HTMLDivElement> = useCallback(e => {
		e.stopPropagation();
		setShowMyPage(false);
	}, []);

	const onLogout = () => {
		dispatch(logoutAction());
		// 쿠키 날리고 ,이메일 날리고, 액세스토큰, 로그인 타입
		history.push('/');
		alert('정상적으로 로그아웃 되었습니다.');
	};

	const onGoWorkspace = () => {
		history.push('/workspace');
	};

	const onGoBoard = () => {
		history.push('/board');
	};

	return (
		<>
			<Header>
				<div onClick={onGoWorkspace}>
					<Logo src={PageLogo} style={{ cursor: 'pointer' }} />
				</div>
				<BoardOrWorkspace>
					<HeaderRouting onClick={onGoBoard}>게시판</HeaderRouting>
					<Divider>|</Divider>
					<HeaderRouting onClick={onGoWorkspace}>마이페이지</HeaderRouting>
				</BoardOrWorkspace>
				<span onClick={onClickMyPage}>
					<ProfileImg
						src={gravatar.url('trollo@gmail.com', { s: '32px', d: 'retro' })}
						alt={'trollo'}
					/>
					{showMyPage && (
						<Menu style={{ right: 24, top: 48 }} show={showMyPage} onCloseModal={onCloseMyPage}>
							<div>{userInfo.email}</div>
							<LogoutButton onClick={onLogout}>Sign out</LogoutButton>
						</Menu>
					)}
				</span>
			</Header>
		</>
	);
};

export default Navbar;
