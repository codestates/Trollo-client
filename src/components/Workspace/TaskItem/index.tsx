import React, { MouseEvent, MouseEventHandler } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { TaskListData, TaskData } from '../DragAndDropArea';
import MoreBtn from '../MoreBtn';
import { Container, TaskItemContainer } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
	taskData: TaskData;
	setShowTaskSetting: (active: boolean) => void;
	setTaskName: (active: string) => void;
}

const TaskItem = ({
	taskList,
	index,
	taskData,
	setShowTaskSetting,
	setTaskName,
}: Props): JSX.Element => {
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
									{taskData.taskItem[task].title}
									<MoreBtn />
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
