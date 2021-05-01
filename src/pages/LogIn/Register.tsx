import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Logo from '../../images/logo.png';

import { Button, Container, Form, Input, Label, LoginOrRegister, LogoImg } from './styles';

const Register = (): JSX.Element => {
	const [email, onChangeEmail] = useInput<string>('');

	const onSubmit = useCallback(e => {
		e.preventDefault();
	}, []);

	return (
		<Container>
			<LogoImg src={Logo} />
			<Form onSubmit={onSubmit}>
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
		</Container>
	);
};

export default Register;
