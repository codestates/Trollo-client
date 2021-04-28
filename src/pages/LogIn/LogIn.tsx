import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';
import { Button, Container, Form, GithubLogin, GoogleLogin, Input, Label, Line, LoginOrRegister, LogoImg, Or, WithOAuth } from './styles';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io'

const LogIn = (): JSX.Element => {
    const [email, onChangeEmail] = useInput('');
    const [loginError, setLoginError] = useState(false);

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        setLoginError(false);

        axios.post('/api/user/login', {}, {
            withCredentials: true,
        })
    }, [email])

    return (
        <div>
            <Container>
            <LogoImg src={Logo} />
            <Form onSubmit={onSubmit}>
                <Label>
                    <span>Email address</span>
                    <div>
                        <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}/>
                    </div>
                </Label>
            </Form>
            <Button type="submit">
                {/* <Link to="/Workspace">Login</Link> */}
                Login
            </Button>
            <LoginOrRegister>
                아직 회원이 아니신가요?&nbsp;
                <Link to="/Register">회원가입 하러 가기</Link>
            </LoginOrRegister>
            <WithOAuth>
                <Line /><Or>OR</Or><Line />
            </WithOAuth>
            </Container>
                <GoogleLogin>
                    <FcGoogle />&nbsp; Google
                </GoogleLogin>
                <GithubLogin>
                    <IoLogoGithub />&nbsp; Github
                </GithubLogin>
        </div>
    )
};

export default LogIn;