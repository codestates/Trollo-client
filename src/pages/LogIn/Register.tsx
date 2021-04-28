import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

import { Button, Container, Form, Input, Label, LoginOrRegister, LogoImg } from './styles';

const Register = (): JSX.Element => {
	return (
		<Container>
			<LogoImg src={Logo} />
			<Form>
				<Label>
					<span>Email address</span>
					<div>
						<Input />
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
