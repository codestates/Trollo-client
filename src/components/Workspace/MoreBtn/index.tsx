import React, { MouseEventHandler } from 'react';
import { Dot, MoreBtnContainer } from './styles';

const MoreBtn = (): JSX.Element => {
	const on: MouseEventHandler<HTMLDivElement> = (e): void => {
		e.stopPropagation();
		console.log('123');
	};
	return (
		<MoreBtnContainer onClick={on}>
			<Dot />
			<Dot />
			<Dot />
		</MoreBtnContainer>
	);
};

export default MoreBtn;
