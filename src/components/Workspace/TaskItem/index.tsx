import React, { MouseEvent } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { taskSelector } from '../../../reducer/workspace';
import { TaskListData } from '../DragAndDropArea';
import MoreMenu from '../MoreMenu';
import { Container, TaskItemContainer } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
	setShowTaskSetting: (active: boolean) => void;
	setTaskName: (active: string) => void;
}

const TaskItem = ({ taskList, index, setShowTaskSetting, setTaskName }: Props): JSX.Element => {
	const taskInitalData = useSelector(taskSelector);

	const onClick = (task: string, e: MouseEvent): void => {
		e.stopPropagation();
		setShowTaskSetting(true);
		setTaskName(task);
	};

	return (
		<Droppable droppableId={`TaskItem-${index}`} type="TaskItem">
			{provided => (
				<Container ref={provided.innerRef}>
					{taskList.tasks.map((task, index) => (
						<Draggable key={task} draggableId={String(task)} index={index}>
							{provided => (
								<TaskItemContainer
									ref={provided.innerRef}
									{...provided.dragHandleProps}
									{...provided.draggableProps}
									onClick={e => onClick(task, e)}
								>
									{taskInitalData.taskItem[task].title}
									<MoreMenu type="taskitem" index={index} />
								</TaskItemContainer>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</Container>
			)}
		</Droppable>
	);
};

export default TaskItem;
