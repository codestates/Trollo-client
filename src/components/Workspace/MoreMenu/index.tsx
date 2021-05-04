import React, { MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskItem, deleteTaskList } from '../../../reducer/workspace';
import { Dot, MoreBtnContainer, MoreMenuContainer } from './styles';

interface Props {
	type: string;
	index: number;
	itemIndex?: number;
	taskName?: string;
}

const MoreMenu = ({ type, index, itemIndex, taskName }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const [showMoreMenu, setShowMoreMenu] = useState(false);

	const onMoreMenu: MouseEventHandler<HTMLDivElement> = (e): void => {
		e.stopPropagation();

		setShowMoreMenu(!showMoreMenu);
	};

	const onDelete: MouseEventHandler<HTMLButtonElement> = (e): void => {
		e.stopPropagation();
		setShowMoreMenu(!showMoreMenu);
		if (type === 'tasklist') {
			dispatch(deleteTaskList(index));
		}

		if (type === 'taskitem') {
			dispatch(deleteTaskItem({ index, itemIndex, taskName }));
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
