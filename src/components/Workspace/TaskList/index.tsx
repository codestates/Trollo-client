import React, { useCallback, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useInput from '../../../hooks/useInput';
import { TaskListData, TaskData, TaskItemData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title, AddTaskInput } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
	taskData: TaskData;
	setTaskData: (active: TaskData) => void;
}

const TaskList = ({ taskList, index, taskData, setTaskData }: Props): JSX.Element => {
	const [title, onChangeTitle] = useInput<string>('');

	const onAddTask = useCallback(() => {
		const id = `TaskItem-${Object.keys(taskData.taskItem).length + 1}`;
		const test = {
			[id]: {
				id,
				title,
				description: '',
				start_date: '0',
				end_date: '0',
				checkList: [{ content: '기본 타입 완벽 이해', checked: false }],
			},
		};

		taskData.taskList[index].tasks.push(id);
		setTaskData({ ...taskData, taskItem: { ...taskData.taskItem, ...test } });
	}, [title]);

	return (
		<Draggable draggableId={taskList.id} index={index}>
			{provided => (
				<Container ref={provided.innerRef} {...provided.draggableProps}>
					<Title {...provided.dragHandleProps}>
						<p>{taskList.title}</p>
					</Title>
					<AddTaskInput
						placeholder="+ Add Task"
						value={title}
						onChange={onChangeTitle}
						onBlur={onAddTask}
					/>
					<TaskItem taskList={taskList} index={index} taskData={taskData} />
				</Container>
			)}
		</Draggable>
	);
};

export default TaskList;
