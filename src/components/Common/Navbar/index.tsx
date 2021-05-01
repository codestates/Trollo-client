import React, { useState, useCallback, MouseEventHandler } from 'react';
import { BoardOrWorkspace, Divider, Header, Logo, LogoutButton, ProfileImg } from './styles';
import PageLogo from '../../../images/PageLogo.png';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from '../Menu/index';
import gravatar from 'gravatar';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../reducer/authorization';
// TODO: 안쓸거면 지우자
// import { BiBell } from 'react-icons/bi';

const Navbar = (): JSX.Element => {
	const [showMyPage, setShowMyPage] = useState(false);
	const { Workspace } = useParams<{ Workspace?: string }>();
	const dispatch = useDispatch();
	const history = useHistory();
	// console.log(Workspace);

	const onClickMyPage = useCallback(() => {
		setShowMyPage(prev => !prev);
	}, []);

	const onCloseMyPage: MouseEventHandler<HTMLDivElement> = useCallback(e => {
		e.stopPropagation();
		setShowMyPage(false);
	}, []);

	const onLogout = () => {
		dispatch(logoutAction());
		history.push('/');
		alert('정상적으로 로그아웃 되었습니다.');
	};

	return (
		<>
			<Header>
				<div>
					<Logo src={PageLogo} />
				</div>
				<BoardOrWorkspace>
					<Link to="/board/board">Board</Link>
					<Divider>|</Divider>
					<Link to="/workspace/workspace">Workspace</Link>
				</BoardOrWorkspace>
				<span onClick={onClickMyPage}>
					<ProfileImg src={gravatar.url('trollo@gmail.com', { s: '32px', d: 'retro' })} alt={'trollo'}></ProfileImg>
					{showMyPage && (
						<Menu style={{ right: 24, top: 48 }} show={showMyPage} onCloseModal={onCloseMyPage}>
							<div>trollo@gmail.com</div>
							<LogoutButton onClick={onLogout}>Sign out</LogoutButton>
						</Menu>
					)}
				</span>
			</Header>
		</>
	);
};

export default Navbar;
