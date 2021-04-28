import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskListData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
}

const TaskList = ({ taskList, index }: Props): JSX.Element => {
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
