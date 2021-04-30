import React, { useCallback, useState } from 'react';
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

export interface TaskListData {
	id: string;
	title: string;
	tasks: string[];
}
export interface TaskItemData {
	[index: string]: {
		id: string;
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
	const [taskData, setTaskData] = useState<TaskData>({
		taskList: [
			{
				id: 'TaskList-1',
				title: 'To do',
				tasks: ['taskItem-1', 'taskItem-3'],
			},
			{ id: 'TaskList-2', title: 'In Progress', tasks: ['taskItem-2'] },
			{ id: 'TaskList-3', title: 'Done', tasks: [] },
		],
		taskItem: {
			'taskItem-1': {
				id: 'taskItem-1',
				title: 'Learn Typescript',
				description: '타입스크립트 공부하기',
				start_date: '0',
				end_date: '0',
				checkList: [
					{ content: '기본 타입 완벽 이해', checked: false },
					{ content: '기본 타입 완벽 이해', checked: false },
				],
			},
			'taskItem-2': {
				id: 'taskItem-2',
				title: 'Trollo Project',
				description: '트롤로 만들기',
				start_date: '0',
				end_date: '0',
				checkList: [],
			},
			'taskItem-3': {
				id: 'taskItem-3',
				title: 'Reciper Project',
				description: '레시퍼 만들기',
				start_date: '0',
				end_date: '0',
				checkList: [{ content: '기본 타입 완벽 이해', checked: false }],
			},
		},
	});
	const [addBtnChangeForm, setAddBtnChangeForm] = useState<boolean>(false);
	const [showTaskSetting, setShowTaskSetting] = useState<boolean>(false);
	const [taskName, setTaskName] = useState<string>('');

	const [title, onAddTitle, setTitle] = useInput<string>('');

	const onDragEnd = useCallback(
		(result: DropResult) => {
			const { type, source, destination } = result;
			const { taskList, taskItem } = taskData;

			if (!destination) {
				return;
			}

			if (type === 'TaskList') {
				const targetData = taskList.splice(source.index, 1);
				taskData.taskList.splice(destination.index, 0, ...targetData);
			}

			if (type === 'TaskItem') {
				const currentIndex = source.index;
				const targetIndex = destination.index;
				const currentListIndex = Number(source.droppableId.split('-')[1]);
				const targetListIndex = Number(destination.droppableId.split('-')[1]);
				const currentTasks: string[] = taskList[currentListIndex].tasks;
				const targetTasks: string[] = taskList[targetListIndex].tasks;

				const current = currentTasks.splice(currentIndex, 1);
				targetTasks.splice(targetIndex, 0, ...current);
			}
		},
		[taskData],
	);

	const addTaskList = useCallback((): void => {
		if (title.trim() === '') {
			return;
		}

		const taskListFrame = {
			id: `TaskList-${taskData.taskList.length + 1}`,
			title,
			tasks: [],
		};

		setTaskData({
			...taskData,
			taskList: [...taskData.taskList, taskListFrame],
		});

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
								{taskData.taskList.map((list, index) => (
									<TaskList
										key={list.id}
										taskList={list}
										index={index}
										taskData={taskData}
										setTaskData={setTaskData}
										setShowTaskSetting={setShowTaskSetting}
										setTaskName={setTaskName}
									/>
								))}
								{provided.placeholder}
							</DragAndDropContainer>

							{addBtnChangeForm ? (
								<AddTaskListTitleInput
									placeholder="Title"
									value={title}
									maxLength={25}
									onChange={onAddTitle}
									onKeyPress={e => e.key === 'Enter' && addTaskList()}
									onBlur={addTaskList}
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
					<TaskSettingModal
						taskData={taskData}
						taskName={taskName}
						setTaskData={setTaskData}
						setShowTaskSetting={setShowTaskSetting}
					/>
				</>
			)}
		</WorksapceContainer>
	);
};

export default DragAndDropArea;
