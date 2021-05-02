import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateOrAny } from 'react-redux';

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
export interface ReorderPayload {
	[index: string]: number;
}
export interface AddTaskPayload {
	index: number;
	title: string;
}
export interface ChangeTaskDetailPayload {
	[index: string]: string;
}

const taskInitalState: TaskData = {
	taskList: [
		{
			title: 'To do',
			tasks: ['taskItem-1'],
		},
		{
			title: 'Done',
			tasks: [],
		},
	],
	taskItem: {
		'taskItem-1': {
			title: '안겹치는 제목',
			description: '타입스크립트 공부하기',
			start_date: '0',
			end_date: '0',
			checkList: [
				{ content: '기본 타입 완벽 이해', checked: false },
				{ content: '기본 타입 완벽 이해', checked: false },
			],
		},
	},
};

export const taskSlice = createSlice({
	name: 'TaskData',
	initialState: taskInitalState,
	reducers: {
		reorderTaskList: (state, { payload }: PayloadAction<ReorderPayload>): void => {
			const { startIndex, endIndex } = payload;
			const targetData = state.taskList.splice(startIndex, 1);
			state.taskList.splice(endIndex, 0, ...targetData);
		},
		reorderTaskItem: (state, { payload }: PayloadAction<ReorderPayload>): void => {
			const { currentIndex, targetIndex, currentListIndex, targetListIndex } = payload;
			const currentTasks: string[] = state.taskList[currentListIndex].tasks;
			const targetTasks: string[] = state.taskList[targetListIndex].tasks;

			const current = currentTasks.splice(currentIndex, 1);
			targetTasks.splice(targetIndex, 0, ...current);
		},
		addTaskList: (state, { payload }: PayloadAction<string>): void => {
			const taskListFrame: TaskListData = {
				title: payload,
				tasks: [],
			};

			state.taskList.push(taskListFrame);
		},
		addTask: (state, { payload }: PayloadAction<AddTaskPayload>): void => {
			const { index, title } = payload;
			const taskName = String(Object.keys(state.taskItem).length + 1);

			const taskFrame = {
				[taskName]: {
					title,
					description: '',
					start_date: '0',
					end_date: '0',
					checkList: [],
				},
			};

			state.taskList[index].tasks.push(taskName);
			state.taskItem = { ...state.taskItem, ...taskFrame };
		},
		changeTaskDetail: (state, { payload }: PayloadAction<ChangeTaskDetailPayload>): void => {
			const { taskName, title, description } = payload;

			const taskDetailFrame = {
				[taskName]: {
					title,
					description,
					start_date: '0',
					end_date: '0',
					checkList: [],
				},
			};

			state.taskItem = { ...state.taskItem, ...taskDetailFrame };
		},
		deleteTaskList: (state, { payload: index }: PayloadAction<number>): void => {
			state.taskList[index].tasks.forEach(itemId => delete state.taskItem[itemId]);
			state.taskList.splice(index, 1);
		},
	},
});

export const {
	reorderTaskList,
	reorderTaskItem,
	addTaskList,
	addTask,
	changeTaskDetail,
	deleteTaskList,
} = taskSlice.actions;

export const taskSelector = (state: RootStateOrAny): TaskData => state.TaskData;
