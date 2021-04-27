import React, { FC, useState, useCallback } from 'react';
import { Header, Logo, LogoutButton, MyPage, ProfileImg } from './styles';
import PageLogo from '../../images/PageLogo.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from '../Menu/index';
import gravatar from 'gravatar';
import { BiBell } from 'react-icons/bi';

const Navbar: FC = () => {
    const [showMyPage, setShowMyPage] = useState(false);
    const { Workspace } = useParams<{ Workspace?: string }>();
    console.log(Workspace);

    const onClickMyPage = useCallback(() => {
        setShowMyPage((prev) => !prev);
    }, []);

    const onCloseMyPage = useCallback((e) => {
        e.stopPropagation();
        setShowMyPage(false);
    }, [])

    return (
        <>
        <Header>
            <Logo src={PageLogo}/>
            Board | Workspace
            <span onClick={onClickMyPage}>
                <ProfileImg src={gravatar.url('trollo@gmail.com', { s: '32px', d: 'retro' })} alt={'trollo'}></ProfileImg>
                {showMyPage && (
                    <Menu style={{ right: 24, top: 48}} show={showMyPage} onCloseModal={onCloseMyPage}>
                        <div>trollo@gmail.com</div>
                        <LogoutButton>
                            Sign out
                        </LogoutButton>
                    </Menu>
                )}
            </span>
        </Header>
        </>
    )
};

export default Navbar;
