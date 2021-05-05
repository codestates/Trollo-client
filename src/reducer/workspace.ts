import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'react';
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
export interface TaskCheckList {
	content: string;
	checked: boolean;
}
export interface ChangeTaskDetailPayload {
	taskName: string;
	title: string;
	description: string;
	start_date: string;
	end_date: string;
	checkList: TaskCheckList[];
}

const taskInitalState: TaskData = {
	taskList: [],
	taskItem: {},
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
					start_date: 'Start Date',
					end_date: 'End Date',
					checkList: [],
				},
			};

			state.taskList[index].tasks.push(taskName);
			state.taskItem = { ...state.taskItem, ...taskFrame };
		},
		changeTaskDetail: (state, { payload }: PayloadAction<ChangeTaskDetailPayload>): void => {
			const { taskName, title, description, start_date, end_date, checkList } = payload;

			const taskDetailFrame = {
				[taskName]: {
					title,
					description,
					start_date,
					end_date,
					checkList,
				},
			};

			state.taskItem = { ...state.taskItem, ...taskDetailFrame };
		},
		deleteTaskList: (state, { payload: index }: PayloadAction<number>): void => {
			state.taskList[index].tasks.forEach(itemId => delete state.taskItem[itemId]);
			state.taskList.splice(index, 1);
		},
		deleteTaskItem: (state, { payload }): void => {
			const { index, itemIndex, taskName } = payload;
			state.taskList[index].tasks.splice(itemIndex, 1);
			delete state.taskItem[taskName];
		},
		getTaskData: (state, { payload }): void => payload,
	},
});

export const axiosGetTaskDate = () => {
	return async (dispatch: Dispatch<{ payload: TaskData; type: string }>): Promise<void> => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/workspace`);
			dispatch(getTaskData(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const axiosPostTaskDate = (data: TaskData) => {
	return async (): Promise<void> => {
		try {
			await axios.post(`${process.env.REACT_APP_SERVER_URL}/workspace`, data);
		} catch (error) {
			console.log(error);
		}
	};
};

export const {
	reorderTaskList,
	reorderTaskItem,
	addTaskList,
	addTask,
	changeTaskDetail,
	deleteTaskList,
	deleteTaskItem,
	getTaskData,
} = taskSlice.actions;

export const taskSelector = (state: RootStateOrAny): TaskData => state.TaskData;
