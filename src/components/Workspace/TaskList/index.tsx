import React, { useCallback, KeyboardEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { TaskListData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { TaskListContainer, Title, AddTaskInput, TaskListTop } from './styles';
import { addTask } from '../../../reducer/workspace';

interface Props {
	taskList: TaskListData;
	index: number;
	color: string;
	setShowTaskSetting: (active: boolean) => void;
	setTaskName: (active: string) => void;
}

const TaskList = ({
	taskList,
	index,
	color,
	setShowTaskSetting,
	setTaskName,
}: Props): JSX.Element => {
	const dispatch = useDispatch();
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const onAddTask = useCallback((): void => {
		if (title.trim() === '') {
			return;
		}

		dispatch(addTask({ index, title }));
		setTitle('');
	}, [title]);

	return (
		<Draggable draggableId={`TaskList-${index}`} index={index}>
			{provided => (
				<TaskListContainer ref={provided.innerRef} {...provided.draggableProps} color={color}>
					<TaskListTop {...provided.dragHandleProps}>
						<Title>
							<p>{taskList.title}</p>
						</Title>
					</TaskListTop>
					<AddTaskInput
						placeholder="+ Add Task"
						value={title}
						onChange={onChangeTitle}
						onBlur={onAddTask}
						onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onAddTask()}
					/>
					<TaskItem
						taskList={taskList}
						listIndex={index}
						setShowTaskSetting={setShowTaskSetting}
						setTaskName={setTaskName}
					/>
				</TaskListContainer>
			)}
		</Draggable>
	);
};

export default TaskList;
