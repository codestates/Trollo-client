import React, { FC, useState, useCallback, MouseEventHandler } from 'react';
import { BoardOrWorkspace, Divider, Header, Logo, LogoutButton, ProfileImg } from './styles';
import PageLogo from '../../../images/PageLogo.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from '../Menu/index';
import gravatar from 'gravatar';
// import { BiBell } from 'react-icons/bi';

const Navbar: FC = () => {
	const [showMyPage, setShowMyPage] = useState(false);
	const { Workspace } = useParams<{ Workspace?: string }>();
	console.log(Workspace);

	const onClickMyPage = useCallback(() => {
		setShowMyPage(prev => !prev);
	}, []);

	const onCloseMyPage: MouseEventHandler<HTMLDivElement> = useCallback(e => {
		e.stopPropagation();
		setShowMyPage(false);
	}, []);

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
					<ProfileImg
						src={gravatar.url('trollo@gmail.com', { s: '32px', d: 'retro' })}
						alt={'trollo'}
					></ProfileImg>
					{showMyPage && (
						<Menu style={{ right: 24, top: 48 }} show={showMyPage} onCloseModal={onCloseMyPage}>
							<div>trollo@gmail.com</div>
							<LogoutButton>Sign out</LogoutButton>
						</Menu>
					)}
				</span>
			</Header>
		</>
	);
};

export default Navbar;
