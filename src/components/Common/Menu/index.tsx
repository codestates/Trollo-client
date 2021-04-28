import React, { useCallback, CSSProperties, ReactNode, MouseEventHandler } from 'react';
import { CreateMyPage } from './styles';

interface Props {
	children: ReactNode;
	show: boolean;
	onCloseModal: MouseEventHandler<HTMLDivElement>;
	style: CSSProperties;
}

const Menu = ({ children, style, show, onCloseModal }: Props): JSX.Element => {
	const stopPropagation = useCallback(e => {
		e.stopPropagation();
	}, []);

	return (
		<>
			{show && (
				<CreateMyPage onClick={onCloseModal}>
					<div style={style} onClick={stopPropagation}>
						{children}
					</div>
				</CreateMyPage>
			)}
		</>
	);
};

export default Menu;
