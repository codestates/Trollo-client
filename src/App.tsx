import React, { useEffect } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyel';
import Theme from './styles/Theme';
import login from './pages/LogIn/LogIn';
import register from './pages/LogIn/Register';
import board from './pages/Board/index';
import content from './pages/Content/index';
import { Switch, Route, Redirect } from 'react-router-dom';
import worksapce from './pages/Workspace';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginInfoSelector, getLoginInfoSuccess } from './reducer/accessToken';
import axios from 'axios';

const App = (): JSX.Element => {
	const test = useSelector(getLoginInfoSelector);
	const dispatch = useDispatch();

	axios.defaults.headers.withCredentials = true;

	useEffect(() => {
		const a = JSON.parse(window.localStorage.getItem('test') as string);

		axios.defaults.headers.common['authorization'] = `Bearer ${a.accessToken}`;
		axios.defaults.headers.common['LoginType'] = a.LoginType;

		dispatch(getLoginInfoSuccess(a));

		axios.get(`${process.env.REACT_APP_SERVER_URL}/refresh`).then(res => console.log(res));

		// 여기에 axios 헤더 다시 넣고
		// 리프레쉬를 위한 로직 작성
		// 1. 최초 로그인 요청 시 리덕스에 accesstoken, email, LoginType 상태 저장
		// 2. 리덕스 내에서는 axios.default.headers 를 이용하여 accesstoken, LoginType을 기본 설정 값으로 바꿔줌
		// 		default로 설정했기 때문에 axios 요청 시 따로 header를 안넣어도 됨
		// 3. 최상단인 App에서 refresh 함수를 호출
		// 4. 로컬스토리지에 저장된 값들을 전달해주고 스토리지 삭제.
		// 5.
	}, []);

	window.onbeforeunload = () => {
		// 1. 새로고침 시 Login 정보를 담은 리듀서를 가져와 accesstoken과 logintype을 가져옴
		// 2. 가져온 값을 로컬 스토리지에 저장
		window.localStorage.setItem('test', JSON.stringify(test));
	};

	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyle} />
			<Switch>
				<Redirect exact path="/" to="/login" />
				<Route path="/Login" component={login} />
				<Route path="/Register" component={register} />
				<Route exact path="/Board" component={board} />
				<Route path="/Board/:id" component={content} />
				<Route path="/workspace" component={worksapce} />
			</Switch>
		</ThemeProvider>
	);
};

export default App;
