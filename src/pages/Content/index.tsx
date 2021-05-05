import React from 'react';

import BoardDetail from '../../components/BoardDetail';
import Comment from '../../components/Comment';
import Navbar from '../../components/Common/Navbar';

const Content = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<BoardDetail />
		</>
	);
};

export default Content;
