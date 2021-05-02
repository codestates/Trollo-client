import React, { MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskList } from '../../../reducer/workspace';
import { Dot, MoreBtnContainer, MoreMenuContainer } from './styles';

interface Props {
	index: number;
	type: string;
}

const MoreMenu = ({ index, type }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const [showMoreMenu, setShowMoreMenu] = useState(false);

	const onMoreMenu: MouseEventHandler<HTMLDivElement> = (e): void => {
		e.stopPropagation();
		setShowMoreMenu(!showMoreMenu);
	};

	const onDelete = () => {
		if (type === 'tasklist') {
			dispatch(deleteTaskList(index));
		}
	};

	return (
		<>
			<MoreBtnContainer onClick={onMoreMenu}>
				<Dot />
				<Dot />
				<Dot />
			</MoreBtnContainer>
			{showMoreMenu && (
				<MoreMenuContainer>
					<button onClick={onDelete}>Delete</button>
				</MoreMenuContainer>
			)}
		</>
	);
};

export default MoreMenu;
