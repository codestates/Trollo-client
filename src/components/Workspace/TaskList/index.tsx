import React, { useCallback, KeyboardEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { TaskListData } from '../DragAndDropArea';
import TaskItem from '../TaskItem';
import { Container, Title, AddTaskInput, TaskListTop } from './styles';
import { addTask } from '../../../reducer/workspace';

interface Props {
	taskList: TaskListData;
	index: number;
	setShowTaskSetting: (active: boolean) => void;
	setTaskName: (active: string) => void;
}

const TaskList = ({ taskList, index, setShowTaskSetting, setTaskName }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const onAddTask = useCallback((): void => {
		if (title.trim() === '') {
			return;
		}

		dispatch(addTask({ index, title }));
		setTitle('');
	}, [title]);

	const colors = ['#F7BFB9', '#FDDDAA', '#FBEBA5', '#B5EFCE', '#ACE9DD', '#B7DCF4', '#DDC6E7'];

	return (
		<Draggable draggableId={`TaskList-${index}`} index={index}>
			{provided => (
				<Container ref={provided.innerRef} {...provided.draggableProps} color={colors[index]}>
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
				</Container>
			)}
		</Draggable>
	);
};

export default TaskList;
