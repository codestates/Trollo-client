import React, { useCallback, KeyboardEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useInput from '../../../hooks/useInput';
import { TaskListData, TaskData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title, AddTaskInput } from './styles';

interface Props {
	taskList: TaskListData;
	index: number;
	taskData: TaskData;
	setTaskData: (active: TaskData) => void;
	setShowTaskSetting: (active: boolean) => void;
	setTaskName: (active: string) => void;
}

const TaskList = ({
	taskList,
	index,
	taskData,
	setTaskData,
	setShowTaskSetting,
	setTaskName,
}: Props): JSX.Element => {
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const onAddTask = useCallback((): void => {
		if (title.trim() === '') {
			return;
		}

		const id = `TaskItem-${Object.keys(taskData.taskItem).length + 1}`;

		const test = {
			[id]: {
				id,
				title,
				description: '',
				start_date: '0',
				end_date: '0',
				checkList: [],
			},
		};

		taskData.taskList[index].tasks.push(id);
		setTaskData({ ...taskData, taskItem: { ...taskData.taskItem, ...test } });
		setTitle('');
	}, [title]);

	return (
		<Draggable draggableId={`TaskList-${index}`} index={index}>
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
						onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onAddTask()}
					/>
					<TaskItem
						taskList={taskList}
						index={index}
						taskData={taskData}
						setShowTaskSetting={setShowTaskSetting}
						setTaskName={setTaskName}
					/>
				</Container>
			)}
		</Draggable>
	);
};

export default TaskList;
