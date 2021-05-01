import React, { useState, useCallback, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Container,
	Form,
	GithubLogin,
	GoogleLogin,
	Input,
	Label,
	Line,
	LoginOrRegister,
	LogoImg,
	Or,
	WithOAuth,
} from './styles';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';
import { fetchMailLogin, mailerLoginAciton } from '../../reducer/authorization';
import { AccessToken, AuthorizationCode } from '../../type/type';
import axios from 'axios';

const LogIn = (): JSX.Element => {
	const [email, onChangeEmail] = useInput<string>('');
	// const authorizationCode = useSelector((state: AuthorizationCode) => state.authorizationCode);
	// const [loginError, setLoginError] = useState<boolean>(false);
	// const accessToken = useSelector((state: AccessToken) => state.accessToken);
	const dispatch = useDispatch();
	const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize?client_id=acbcbe5ecc30788ce836';

	const onLoginMail = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		// dispatch(fetchMailLogin({ email }));
		axios.post('http://8e4d052f7b39.ngrok.io/mail', { email });
		alert('해당 메일에 인증번호가 전송되었습니다.');
	};

	const onGithubLogin = () => {
		window.location.assign(GITHUB_LOGIN_URL);
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');

		// dispatch(fetchLoginGithub());
	}, [dispatch]);

	return (
		<div>
			<Container>
				<LogoImg src={Logo} />
				<Form onSubmit={onLoginMail}>
					<Label>
						<span>Email address</span>
						<div>
							<Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
						</div>
					</Label>
					<Button type="submit">Login</Button>
				</Form>
				<LoginOrRegister>
					아직 회원이 아니신가요?&nbsp;
					<Link to="/Register">회원가입 하러 가기</Link>
				</LoginOrRegister>
			</Container>
			<WithOAuth>
				<Line />
				<Or>OR</Or>
				<Line />
			</WithOAuth>
			<GoogleLogin>
				<FcGoogle />
				&nbsp; Google
			</GoogleLogin>
			<GithubLogin onClick={onGithubLogin}>
				<IoLogoGithub />
				&nbsp; Github
			</GithubLogin>
		</div>
	);
};

export default LogIn;
