import React, { useCallback } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskListData, TaskData, TaskItemData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title, AddTaskBtn } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
	taskData: TaskData;
	setTaskData: (taskData: React.SetStateAction<TaskData>) => void;
}

const TaskList = ({ taskList, index, taskData, setTaskData }: Props): JSX.Element => {
	const onAddTask = useCallback(() => {
		const id = `TaskItem-${Object.keys(taskData.taskItem).length + 1}`;
		const test = {
			[id]: {
				id,
				title: 'Test',
				content: 'Test',
				status: 'Doing',
				start_date: '0',
				end_date: '0',
				checkList: [{ content: '기본 타입 완벽 이해', checked: false }],
			},
		};

		taskList.tasks.push(id);
		setTaskData({ ...taskData, taskItem: { ...taskData.taskItem, ...test } });
	}, [taskData]);

	return (
		<Draggable draggableId={taskList.id} index={index}>
			{provided => (
				<Container ref={provided.innerRef} {...provided.draggableProps}>
					<Title {...provided.dragHandleProps}>
						<p>{taskList.title}</p>
					</Title>
					<TaskItem taskList={taskList} index={index} />
					<AddTaskBtn onClick={onAddTask}>+ Add Task</AddTaskBtn>
				</Container>
			)}
		</Draggable>
	);
};

export default TaskList;
