import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { TaskListData, TaskData } from '../DragAndDropArea';
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
	const onClick = (task: string): void => {
		setShowTaskSetting(true);
		setTaskName(task);
	};

	return (
		<Droppable droppableId={`TaskItem-${index}`} type="TaskItem">
			{provided => (
				<Container ref={provided.innerRef}>
					{taskList.tasks.map((task, index) => (
						<Draggable key={task} draggableId={task} index={index}>
							{provided => (
								<TaskItemContainer
									ref={provided.innerRef}
									{...provided.dragHandleProps}
									{...provided.draggableProps}
									onClick={() => onClick(task)}
								>
									{taskData.taskItem[task].title}
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
