import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import TaskList from '../TaskList';
import { DragAndDropContainer, WorksapceContainer } from './styles';

export interface TaskListData {
	id: string;
	title: string;
	tasks: string[];
}
export interface TaskItemData {
	[index: string]: {
		id: string;
		title: string;
		content: string;
		status: string;
		start_date: string;
		end_date: string;
		checkList: { content: string; checked: boolean }[];
	};
}
interface TaskData {
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
				content: '타입스크립트 공부하기',
				status: 'Doing',
				start_date: '0',
				end_date: '0',
				checkList: [{ content: '기본 타입 완벽 이해', checked: false }],
			},
			'taskItem-2': {
				id: 'taskItem-2',
				title: 'Trollo Project',
				content: '트롤로 만들기',
				status: 'To do',
				start_date: '0',
				end_date: '0',
				checkList: [],
			},
			'taskItem-3': {
				id: 'taskItem-3',
				title: 'Reciper Project',
				content: '레시퍼 만들기',
				status: 'Done',
				start_date: '0',
				end_date: '0',
				checkList: [],
			},
		},
	});

	const onDragEnd = (result: DropResult) => {
		console.log(result);
		const { type, source, destination } = result;
		if (!destination) {
			return;
		}

		if (type === 'TaskList') {
			return;
		}

		if (type === 'TaskItem') {
			return;
		}
	};

	return (
		<WorksapceContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="TaskList" type="TaskList" direction="horizontal">
					{provided => (
						<DragAndDropContainer ref={provided.innerRef}>
							{taskData.taskList.map((list, index) => (
								<TaskList key={list.id} taskList={list} index={index} />
							))}
							{provided.placeholder}
						</DragAndDropContainer>
					)}
				</Droppable>
			</DragDropContext>
		</WorksapceContainer>
	);
};

/*
이걸 어떻게 원본을 유지하나??
{
	taskList: [
		{
			id: 'TaskList-1',
			content: 'To do',
			tasks: ['taskItem-1', 'taskItem-3'],
		},
		{ id: 'TaskList-2', content: 'In Progress', tasks: ['taskItem-2'] },
		{ id: 'TaskList-3', content: 'Done', tasks: [] },
	],
	task: {
		'taskItem-1': { id: 'taskItem-1', content: 'Learn Typescript' },
		'taskItem-2': { id: 'taskItem-2', content: 'Trollo Project' },
		'taskItem-3': { id: 'taskItem-3', content: 'Reciper Project' },
	}
}
*/

export default DragAndDropArea;
