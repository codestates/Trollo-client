import React, { useCallback, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskListData, TaskData, TaskItemData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title, AddTaskBtn } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
	taskData: TaskData;
	setShowTaskSetup: (active: boolean) => void;
	setTaskListIndex: (active: number) => void;
}

const TaskList = ({
	taskList,
	index,
	taskData,
	setShowTaskSetup,
	setTaskListIndex,
}: Props): JSX.Element => {
	const onAddClick = () => {
		setShowTaskSetup(true);
		setTaskListIndex(index);
	};

	return (
		<Draggable draggableId={taskList.id} index={index}>
			{provided => (
				<Container ref={provided.innerRef} {...provided.draggableProps}>
					<Title {...provided.dragHandleProps}>
						<p>{taskList.title}</p>
					</Title>
					<TaskItem taskList={taskList} index={index} taskData={taskData} />
					<AddTaskBtn onClick={onAddClick}>+ Add Task</AddTaskBtn>
				</Container>
			)}
		</Draggable>
	);
};

export default TaskList;
