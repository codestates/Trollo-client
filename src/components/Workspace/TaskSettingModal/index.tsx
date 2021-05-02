import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { changeTaskDetail, taskSelector } from '../../../reducer/workspace';
import {
	ChecklistInput,
	ChecklistSection,
	DateForm,
	DateSection,
	DateWrap,
	DescriptionSection,
	DescriptionTextarea,
	SectionTitle,
	TaskSetupContainer,
	TaskSetupModal,
	TitleInput,
	TitleSection,
} from './styles';

interface Props {
	taskName: string;
	setShowTaskSetting: (active: boolean) => void;
}

const TaskSettingModal = ({ taskName, setShowTaskSetting }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const taskInitalData = useSelector(taskSelector);

	const { title, description } = taskInitalData.taskItem[taskName];

	const [taskTitle, onChangeTitle, setTaskTitle] = useInput<string>(title);
	const [taskDescription, setTaskDescription] = useState<string>(description);

	const onCloseModal = useCallback((): void => {
		if (taskTitle.trim() === '') {
			setTaskTitle(title);
		}

		dispatch(changeTaskDetail({ taskName, title: taskTitle, description: taskDescription }));
		setShowTaskSetting(false);
	}, [taskTitle, taskDescription]);

	return (
		<>
			<TaskSetupContainer onClick={onCloseModal} />
			<TaskSetupModal>
				<TitleSection>
					<TitleInput placeholder="제목" value={taskTitle} onChange={onChangeTitle} />
				</TitleSection>
				<DescriptionSection>
					<SectionTitle>내용</SectionTitle>
					<DescriptionTextarea
						value={taskDescription}
						onChange={e => setTaskDescription(e.target.value)}
					/>
				</DescriptionSection>
				<DateSection>
					<SectionTitle>기간</SectionTitle>
					<DateWrap>
						<DateForm>
							<p>Start date</p>
							<input placeholder="Set start Date" />
						</DateForm>
						<DateForm>
							<p>End date</p>
							<input placeholder="Set end Date" />
						</DateForm>
					</DateWrap>
				</DateSection>
				<ChecklistSection>
					<SectionTitle>체크리스트</SectionTitle>
					<ChecklistInput placeholder="Add Checklist" />
				</ChecklistSection>
			</TaskSetupModal>
		</>
	);
};

export default TaskSettingModal;
