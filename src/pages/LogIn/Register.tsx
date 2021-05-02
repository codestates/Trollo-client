import axios from 'axios';
import React, { useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';
import { axiosLoginInfo } from '../../reducer/accessToken';

import { Button, Form, Input, Label, LoginContainer, LoginOrRegister, LogoImg } from './styles';

const Register = (): JSX.Element => {
	const [email, onChangeEmail] = useInput<string>('');
	const dispatch = useDispatch();
	const history = useHistory();

	const onLoginMail = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		axios.post('http://dd8755ab1f88.ngrok.io/mail', { email });
		alert('해당 메일에 인증번호가 전송되었습니다.');
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const authorizationCode = url.searchParams.get('code');
		const email = url.searchParams.get('email');

		if (authorizationCode && email) {
			dispatch(axiosLoginInfo('emailauth', authorizationCode, email));
			history.push('/workspace');
		}
	}, []);

	return (
		<LoginContainer>
			<LogoImg src={Logo} />
			<Form onSubmit={onLoginMail}>
				<Label>
					<span>Email address</span>
					<div>
						<Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
					</div>
				</Label>
			</Form>
			<Button>Continue</Button>
			<LoginOrRegister>
				이미 계정이 있으신가요?&nbsp;
				<Link to="/Login">로그인 하러 가기</Link>
			</LoginOrRegister>
		</LoginContainer>
	);
};

export default Register;
