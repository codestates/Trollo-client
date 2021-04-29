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
	const [title, onChangeTitle] = useInput<string>('');
	const [description, onChangeDescription] = useInput<string>('');
	const [status, onChangeStatus] = useInput<string>('');

	const onCloseModal = () => {
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
