import React, { useCallback, useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import {
	AddTaskListBtn,
	AddTaskListTitleInput,
	DragAndDropContainer,
	Loading,
	Trash,
	TrashIcon,
	WorksapceContainer,
} from './styles';
import useInput from '../../../hooks/useInput';
import TaskList from '../TaskList';
import TaskSettingModal from '../TaskSettingModal';
import { useDispatch, useSelector } from 'react-redux';
import {
	reorderTaskList,
	taskSelector,
	reorderTaskItem,
	addTaskList,
	axiosGetTaskDate,
	axiosPostTaskDate,
	deleteTaskList,
} from '../../../reducer/workspace';

export interface TaskListData {
	title: string;
	tasks: string[];
}
export interface TaskItemData {
	[index: string]: {
		title: string;
		description: string;
		start_date: string;
		end_date: string;
		checkList: { content: string; checked: boolean }[];
	};
}
export interface TaskData {
	taskList: TaskListData[];
	taskItem: TaskItemData;
}

const DragAndDropArea = (): JSX.Element => {
	const dispatch = useDispatch();
	const taskInitalData = useSelector(taskSelector);
	const [addBtnChangeForm, setAddBtnChangeForm] = useState<boolean>(false);
	const [showTaskSetting, setShowTaskSetting] = useState<boolean>(false);
	const [taskName, setTaskName] = useState<string>('');
	const [title, onAddTitle, setTitle] = useInput<string>('');
	const [count, setCount] = useState<number>(Math.floor(Math.random() * 10));

	const isLoadDataSuccess = taskInitalData.taskList.length;

	useEffect(() => {
		setTimeout(() => {
			dispatch(axiosGetTaskDate());
		}, 100);
	}, []);

	useEffect(() => {
		if (taskInitalData.taskList.length) {
			dispatch(axiosPostTaskDate(taskInitalData));
		}
	}, [taskInitalData]);

	const onDragEnd = useCallback(
		(result: DropResult): void => {
			const { type, source, destination } = result;
			if (!destination) {
				return;
			}

			if (type === 'TaskList') {
				if (destination.droppableId === 'test') {
					dispatch(deleteTaskList(source.index));
				} else {
					dispatch(reorderTaskList({ startIndex: source.index, endIndex: destination.index }));
				}
			}

			if (type === 'TaskItem') {
				dispatch(
					reorderTaskItem({
						currentIndex: source.index,
						targetIndex: destination.index,
						currentListIndex: Number(source.droppableId.split('-')[1]),
						targetListIndex: Number(destination.droppableId.split('-')[1]),
					}),
				);
			}
		},
		[taskInitalData],
	);

	const randomColor = (): string => {
		setCount(count + 1);
		const colors = [
			'#FFD7AF',
			'#B1C1E9',
			'#BCE7B5',
			'#FCF784',
			'#FFAAAA',
			'#FDC5FB',
			'#CA9FF8',
			'#ABE2E9',
			'#E8FCBD',
			'#F8CFC9',
			'#F6CEA8',
			'#FAE68C',
			'#C8E5AF',
			'#C7E7D0',
			'#BADFE5',
			'#B1D3DF',
			'#B5C0DC',
			'#D6C4DA',
			'#F2CBCE',
		];
		if (count >= colors.length - 1) {
			setCount(0);
		}

		return colors[count];
	};

	const onAddTaskList = useCallback((): void => {
		if (title.trim() === '') {
			return;
		}

		dispatch(addTaskList({ title, color: randomColor() }));
		setTitle('');
		setAddBtnChangeForm(false);
	}, [title]);

	return (
		<WorksapceContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="TaskList" type="TaskList" direction="horizontal">
					{provided => (
						<DragAndDropContainer>
							{isLoadDataSuccess ? (
								<div style={{ display: 'flex', alignItems: 'flex-start' }} ref={provided.innerRef}>
									{taskInitalData.taskList.map((list, index) => (
										<TaskList
											key={`TaskList-${index}`}
											taskList={list}
											index={index}
											color={list.color}
											setShowTaskSetting={setShowTaskSetting}
											setTaskName={setTaskName}
										/>
									))}
									{provided.placeholder}
									{addBtnChangeForm ? (
										<AddTaskListTitleInput
											placeholder="Title"
											value={title}
											maxLength={25}
											onChange={onAddTitle}
											onKeyPress={e => e.key === 'Enter' && onAddTaskList()}
											onBlur={onAddTaskList}
										/>
									) : (
										<AddTaskListBtn onClick={() => setAddBtnChangeForm(true)}>
											+ Add TaskList
										</AddTaskListBtn>
									)}
									<Droppable droppableId="test" type="TaskList">
										{provided => (
											<Trash ref={provided.innerRef}>
												<TrashIcon />
											</Trash>
										)}
									</Droppable>
								</div>
							) : (
								<Loading>Loading...</Loading>
							)}
						</DragAndDropContainer>
					)}
				</Droppable>
			</DragDropContext>

			{showTaskSetting && (
				<>
					<TaskSettingModal taskName={taskName} setShowTaskSetting={setShowTaskSetting} />
				</>
			)}
		</WorksapceContainer>
	);
};

export default DragAndDropArea;
