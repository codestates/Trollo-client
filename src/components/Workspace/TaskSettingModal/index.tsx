import React, { useCallback, useState } from 'react';
import useInput from '../../../hooks/useInput';
import { TaskData } from '../DragAndDropArea';
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
	taskData: TaskData;
	taskName: string;
	setTaskData: (active: TaskData) => void;
	setShowTaskSetting: (active: boolean) => void;
}

const TaskSettingModal = ({
	taskData,
	taskName,
	setShowTaskSetting,
	setTaskData,
}: Props): JSX.Element => {
	const { id, title, description, start_date, end_date, checkList } = taskData.taskItem[taskName];

	const [taskTitle, onChangeTitle, setTaskTitle] = useInput<string>(title);
	const [taskDescription, setTaskDescription] = useState<string>(description);

	const onCloseModal = useCallback((): void => {
		if (taskTitle.trim() === '') {
			setTaskTitle(title);
		}

		const test = {
			[id]: {
				id,
				title: taskTitle,
				description: taskDescription,
				start_date: '0',
				end_date: '0',
				checkList: [],
			},
		};

		setTaskData({ ...taskData, taskItem: { ...taskData.taskItem, ...test } });
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
