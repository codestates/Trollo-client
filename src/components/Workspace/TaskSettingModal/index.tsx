import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';
import { TaskData } from '../DragAndDropArea';
import { TaskSetupContainer, TaskSetupModal, TitleInput } from './styles';

interface Props {
	taskData: TaskData;
	taskName: string;
	setTaskData: (active: TaskData) => void;
	setShowTaskSetting: (active: boolean) => void;
}

const TaskSetup = ({ taskData, taskName, setShowTaskSetting, setTaskData }: Props): JSX.Element => {
	const { id, title, description, start_date, end_date, checkList } = taskData.taskItem[taskName];

	const [Tasktitle, onChangeTitle] = useInput<string>(title);
	const [Taskdescription, onChangeDescription] = useInput<string>(description);

	const onCloseModal = () => {
		setShowTaskSetting(false);
	};

	return (
		<>
			<TaskSetupContainer onClick={onCloseModal} />
			<TaskSetupModal>
				<TitleInput placeholder="Title" value={Tasktitle} onChange={onChangeTitle} />
				<input placeholder="Description" value={Taskdescription} onChange={onChangeDescription} />
			</TaskSetupModal>
		</>
	);
};

export default TaskSetup;
