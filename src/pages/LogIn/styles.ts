import styled from '@emotion/styled';

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 800px;
`;

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
	width: 400px;
	margin-top: -30px;
	margin-bottom: 30px;
	border-radius: 5px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
`;

export const LogoImg = styled.img`
	margin: 20px;
	text-align: center;
	width: 50%;
	margin-bottom: 30px;
`;

export const Form = styled.form`
	margin: 0 auto;
	width: 300px;
	max-width: 400px;
`;

export const Label = styled.label`
    margin-bottom: 16px;
    & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    color: #47515f;
    cursor: pointer;
    font-weight: 600;
`;

export const Input = styled.input`
	margin-bottom: 16px;
	width: 300px;
	height: 40px;
	border-radius: 5px;
	border: 0.5px solid #47515f;
	padding: 12px;
	padding-top: 12px;
	padding-bottom: 12px;
	font-size: 20px;
	--saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
	border: 1px solid var(--saf-0);
	transition: border 80ms ease-out, box-shadow 80ms ease-out;
	&:focus {
		--saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
		box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
	}
`;

export const Button = styled.button`
	margin-bottom: 20px;
	width: 300px;
	max-width: 100%;
	height: 40px;
	color: #fff;
	background-color: #0065ff;
	font-size: 20px;
	font-weight: 900;
	border-radius: 5px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

	&: hover {
		background: #097eff;
	}
`;

export const OAuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const WithOAuth = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

export const Line = styled.hr`
	width: 150px;
	background-color: #777777;
`;

export const Or = styled.p`
	margin: 0 30px;
`;

export const GoogleLogin = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	width: 300px;
	max-width: 100%;
	text-align: center;
	height: 40px;
	color: #black;
	background-color: #fff;
	font-size: 20px;
	font-weight: 900;
	border-radius: 5px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	&: hover {
		color: #53585f;
	}
`;

export const GithubLogin = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	width: 300px;
	max-width: 100%;
	height: 40px;
	color: #fff;
	background-color: #374151;
	font-size: 20px;
	font-weight: 900;
	border-radius: 5px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	&: hover {
		background: #53585f;
	}
`;

export const Error = styled.div``;

export const Success = styled.div``;

export const LoginOrRegister = styled.p`
	color: #777777;
	margin-bottom: 20px;
`;
