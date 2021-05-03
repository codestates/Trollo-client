import React, { forwardRef, LegacyRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { changeTaskDetail, taskSelector } from '../../../reducer/workspace';
import {
	ChecklistInput,
	ChecklistSection,
	DateCustomBtn,
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

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
	const [startDate, setStartDate] = useState<any>(null);
	const [endDate, setEndDate] = useState<any>(null);

	const onCloseModal = useCallback((): void => {
		if (taskTitle.trim() === '') {
			setTaskTitle(title);
		}

		dispatch(changeTaskDetail({ taskName, title: taskTitle, description: taskDescription }));
		setShowTaskSetting(false);
	}, [taskTitle, taskDescription]);

	const DatePickerCustomBtn = forwardRef(
		({ value, onClick, text }: any, ref: LegacyRef<HTMLButtonElement> | undefined) => {
			return (
				<DateCustomBtn className="example-custom-input" onClick={onClick} ref={ref}>
					{value ? value : text}
				</DateCustomBtn>
			);
		},
	);
	DatePickerCustomBtn.displayName = 'custom btn';
	console.log(startDate, endDate);
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
							<DatePicker
								dateFormat="yyyy-MM-dd"
								selected={startDate}
								onChange={date => setStartDate(date)}
								customInput={<DatePickerCustomBtn text="Start Date" />}
								selectsStart
								startDate={startDate}
								endDate={endDate}
								monthsShown={2}
							/>
						</DateForm>
						<DateForm>
							<p>End date</p>
							<DatePicker
								dateFormat="yyyy-MM-dd"
								selected={endDate}
								onChange={date => setEndDate(date)}
								customInput={<DatePickerCustomBtn text="End Date" />}
								selectsEnd
								startDate={startDate}
								endDate={endDate}
								minDate={startDate}
								monthsShown={2}
							/>
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
