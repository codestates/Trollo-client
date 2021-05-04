import React, { useCallback, useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import {
	AddTaskListBtn,
	AddTaskListTitleInput,
	DragAndDropContainer,
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
} from '../../../reducer/workspace';
import { getLoginInfoSelector } from '../../../reducer/accessToken';

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
	const { accessToken, LoginType } = useSelector(getLoginInfoSelector);
	const [addBtnChangeForm, setAddBtnChangeForm] = useState<boolean>(false);
	const [showTaskSetting, setShowTaskSetting] = useState<boolean>(false);
	const [taskName, setTaskName] = useState<string>('');
	const [title, onAddTitle, setTitle] = useInput<string>('');

	useEffect(() => {
		if (LoginType) {
			dispatch(axiosGetTaskDate(accessToken, LoginType));
		}
	}, [LoginType]);

	useEffect(() => {
		if (LoginType) {
			dispatch(axiosPostTaskDate(taskInitalData, accessToken, LoginType));
		}
	}, [taskInitalData]);

	const onDragEnd = useCallback(
		(result: DropResult) => {
			const { type, source, destination } = result;

			if (!destination) {
				return;
			}

			if (type === 'TaskList') {
				dispatch(reorderTaskList({ startIndex: source.index, endIndex: destination.index }));
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

	const onAddTaskList = useCallback((): void => {
		if (title.trim() === '') {
			return;
		}

		dispatch(addTaskList(title));
		setTitle('');
		setAddBtnChangeForm(false);
	}, [title]);

	return (
		<WorksapceContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="TaskList" type="TaskList" direction="horizontal">
					{provided => (
						<div style={{ display: 'flex' }}>
							<DragAndDropContainer ref={provided.innerRef}>
								{taskInitalData ? (
									taskInitalData.taskList.map((list, index) => (
										<TaskList
											key={`TaskList-${index}`}
											taskList={list}
											index={index}
											setShowTaskSetting={setShowTaskSetting}
											setTaskName={setTaskName}
										/>
									))
								) : (
									<div>loading</div>
								)}
								{provided.placeholder}
							</DragAndDropContainer>
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
						</div>
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
