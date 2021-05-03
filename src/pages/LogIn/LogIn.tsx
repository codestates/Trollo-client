import React, { useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import {
	Button,
	Form,
	GithubLogin,
	GoogleLogin,
	Input,
	Label,
	Line,
	LoginContainer,
	LoginOrRegister,
	LogoImg,
	OAuthContainer,
	Or,
	PageContainer,
	WithOAuth,
} from './styles';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';
import axios from 'axios';
import { axiosLoginInfo } from '../../reducer/accessToken';

const LogIn = (): JSX.Element => {
	const [email, onChangeEmail] = useInput<string>('');
	const dispatch = useDispatch();
	const history = useHistory();
	const GITHUB_LOGIN_URL =
		'https://github.com/login/oauth/authorize?client_id=acbcbe5ecc30788ce836';
	const GOOGLE_LOGIN_URL =
		'https://accounts.google.com/o/oauth2/auth?client_id=1026659521874-edp0dknss2j85jk6kjun2pne9mi3ik86.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&access_type=offline';

	const onLoginMail = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		axios.post(`${process.env.REACT_APP_SERVER_URL}/mail`, { email });
		alert('해당 메일에 인증번호가 전송되었습니다.');
	};

	const onGithubLogin = () => {
		window.location.assign(GITHUB_LOGIN_URL);
	};

	const onGoogleLogin = () => {
		window.location.assign(GOOGLE_LOGIN_URL);
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get('code');
		const scope = url.searchParams.get('scope');
		const email = url.searchParams.get('email');

		if (authorizationCode) {
			if (email) {
				dispatch(axiosLoginInfo('emailauth', authorizationCode, email));
				history.push('/workspace');
			} else if (scope) {
				dispatch(axiosLoginInfo('loginOAuthGoogle', authorizationCode, email));
				history.push('/workspace');
			} else {
				dispatch(axiosLoginInfo('loginOAuthGithub', authorizationCode, email));
				history.push('/workspace');
			}
		}
	}, []);

	return (
		<PageContainer>
			<LoginContainer>
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
			</LoginContainer>
			<OAuthContainer>
				<WithOAuth>
					<Line />
					<Or>OR</Or>
					<Line />
				</WithOAuth>
				<GoogleLogin onClick={onGoogleLogin}>
					<FcGoogle />
					&nbsp; Google
				</GoogleLogin>
				<GithubLogin onClick={onGithubLogin}>
					<IoLogoGithub />
					&nbsp; Github
				</GithubLogin>
			</OAuthContainer>
		</PageContainer>
	);
};

export default LogIn;
