import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { TaskListData } from '../DragAndDropArea';
import { Container, TaskItemContainer } from './styles';

interface TaskItemProps {
	taskList: TaskListData;
	index: number;
}

const TaskItem = ({ taskList, index }: TaskItemProps): JSX.Element => {
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
								>
									{task}
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
