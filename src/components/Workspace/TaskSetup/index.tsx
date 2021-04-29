import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';
import { TaskData } from '../DragAndDropArea';
import { TaskSetupContainer, TaskSetupModal, TitleInput } from './styles';

interface Props {
	taskData: TaskData;
	taskListIndex: number;
	setTaskData: (active: TaskData) => void;
	setShowTaskSetup: (active: boolean) => void;
}

const TaskSetup = ({
	taskData,
	taskListIndex,
	setShowTaskSetup,
	setTaskData,
}: Props): JSX.Element => {
	const [title, onChangeTitle] = useInput('');
	const [description, onChangeDescription] = useInput('');
	const [status, onChangeStatus] = useInput('');

	const onCloseModal = () => {
		const id = `TaskItem-${Object.keys(taskData.taskItem).length + 1}`;
		const test = {
			[id]: {
				id,
				title,
				description,
				status,
				start_date: '0',
				end_date: '0',
				checkList: [{ content: '기본 타입 완벽 이해', checked: false }],
			},
		};

		taskData.taskList[taskListIndex].tasks.push(id);
		setTaskData({ ...taskData, taskItem: { ...taskData.taskItem, ...test } });
		setShowTaskSetup(false);
	};

	return (
		<>
			<TaskSetupContainer onClick={onCloseModal} />
			<TaskSetupModal>
				<TitleInput placeholder="Title" onChange={onChangeTitle} />
				<input placeholder="Description" onChange={onChangeDescription} />
				<input placeholder="status" onChange={onChangeStatus} />
			</TaskSetupModal>
		</>
	);
};

export default TaskSetup;
