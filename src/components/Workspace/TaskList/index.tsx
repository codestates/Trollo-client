import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskListData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title } from './styles';

interface TaskListProps {
	taskList: TaskListData;
	index: number;
}

const TaskList = ({ taskList, index }: TaskListProps): JSX.Element => {
	return (
		<Draggable draggableId={taskList.id} index={index}>
			{provided => (
				<Container ref={provided.innerRef} {...provided.draggableProps}>
					<Title {...provided.dragHandleProps}>
						<p>{taskList.id}</p>
					</Title>
					<TaskItem taskList={taskList} index={index} />
				</Container>
			)}
		</Draggable>
	);
};

export default TaskList;
