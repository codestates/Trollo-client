import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getContentById } from '../../components/Board/Table/FakeData';
import { ContentWrapper, GobackButton, Header } from './styles';

// interface Props {
//     match: number,
// }

const Content = (): JSX.Element => {
	const [data, setData] = useState({});
	const history = useHistory();
	const { id } = useParams<{ id?: string }>();

	console.log(id);

	// useEffect(() => {
	//     setData(getContentById(id));
	// }, [ ]);

	const onGoback = () => {
		history.push('/Board/Board');
	};

	return (
		<>
			<Header>게시글</Header>
			<ContentWrapper></ContentWrapper>
			<GobackButton onClick={onGoback}>목록으로 돌아가기</GobackButton>
		</>
	);
};

export default Content;
