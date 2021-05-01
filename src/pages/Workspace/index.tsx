import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DragAndDropArea from '../../components/Workspace/DragAndDropArea';
import { getAccessTokenSelector } from '../../reducer/accessToken';

const Worksapce = (): JSX.Element => {
	const accessTokenState = useSelector(getAccessTokenSelector);

	useEffect(() => {
		console.log('1111111111111', accessTokenState);
	}, [accessTokenState]);
	return (
		<>
			<DragAndDropArea />
		</>
	);
};

export default Worksapce;
