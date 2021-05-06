import React, { useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';
import Loginbackground from '../../images/Loginbackground.png';
import { useDispatch } from 'react-redux';
import {
	Background,
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
	const [email, onChangeEmail, setEmail] = useInput<string>('');
	const dispatch = useDispatch();
	const history = useHistory();

	const onLoginMail = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		axios.post(`${process.env.REACT_APP_SERVER_URL}/mail`, { email });
		alert('해당 메일에 인증번호가 전송되었습니다.');
		setEmail('');
	};

	const onGithubLogin = () => {
		window.location.assign(`${process.env.REACT_APP_GITHUB_URL}`);
	};

	const onGoogleLogin = () => {
		window.location.assign(`${process.env.REACT_APP_GOOGLE_URL}`);
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get('code');
		const scope = url.searchParams.get('scope');
		const email = url.searchParams.get('email');

		if (authorizationCode) {
			if (email) {
				dispatch(axiosLoginInfo('emailauth', authorizationCode, email));
			} else if (scope) {
				dispatch(axiosLoginInfo('loginOAuthGoogle', authorizationCode, email));
			} else {
				dispatch(axiosLoginInfo('loginOAuthGithub', authorizationCode, email));
			}

			history.push('/workspace');
		}
	}, []);

	return (
		<Background style={{ backgroundImage: `url(${Loginbackground})` }}>
			<PageContainer>
				<LoginContainer>
					<LogoImg src={Logo} />
					<Form onSubmit={onLoginMail}>
						<Label>
							<span>Email address</span>
							<div>
								<Input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={onChangeEmail}
								/>
							</div>
						</Label>
						<Button type="submit">Login</Button>
					</Form>
					<LoginOrRegister>해당 이메일로 로그인 코드가 전송됩니다</LoginOrRegister>
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
		</Background>
	);
};

export default LogIn;
