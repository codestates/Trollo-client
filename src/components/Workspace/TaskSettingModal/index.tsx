import React, { forwardRef, LegacyRef, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { changeTaskDetail, taskSelector } from '../../../reducer/workspace';
import {
	ChecklistCheckbox,
	ChecklistInput,
	ChecklistItem,
	ChecklistSection,
	ChecklistWrap,
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
	const { title, description, start_date, end_date, checkList } = taskInitalData.taskItem[taskName];
	const [taskTitle, onChangeTitle, setTaskTitle] = useInput<string>(title);
	const [taskDescription, setTaskDescription] = useState<string>(description);
	const [startDate, setStartDate] = useState<any>(null);
	const [endDate, setEndDate] = useState<any>(null);
	const [currentCheckList, setCurrentCheckList] = useState<{ content: string; checked: boolean }[]>(
		[...checkList],
	);
	const [listContent, onChangeContent, setListContent] = useInput<string>('');

	const onCloseModal = useCallback((): void => {
		if (taskTitle.trim() === '') {
			setTaskTitle(title);
		}

		const formetDate = (date: Date, type: string): string => {
			if (date === null) {
				return type === 'start' ? start_date : end_date;
			}
			const yyyy: number = date.getFullYear();
			let mm: string | number = date.getMonth() + 1;
			mm = mm >= 10 ? mm : `0${mm}`;
			let dd: string | number = date.getDate();
			dd = dd >= 10 ? dd : `0${dd}`;

			return `${yyyy}-${mm}-${dd}`;
		};

		dispatch(
			changeTaskDetail({
				taskName,
				title: taskTitle,
				description: taskDescription,
				start_date: formetDate(startDate, 'start'),
				end_date: formetDate(endDate, 'end'),
				checkList: currentCheckList,
			}),
		);

		setShowTaskSetting(false);
	}, [taskTitle, taskDescription, startDate, endDate, currentCheckList]);

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

	const onChecked = useCallback(
		(e: MouseEvent<HTMLDivElement>, index: number) => {
			currentCheckList[index] = {
				...currentCheckList[index],
				checked: !currentCheckList[index].checked,
			};

			currentCheckList[index].checked
				? e.currentTarget.classList.add('checked')
				: e.currentTarget.classList.remove('checked');
		},
		[currentCheckList],
	);

	const onAddCheckList = () => {
		if (listContent.trim() === '') {
			return;
		}

		const checkListFrame = {
			content: listContent,
			checked: false,
		};

		setCurrentCheckList([...currentCheckList, checkListFrame]);
		setListContent('');
	};

	return (
		<>
			<TaskSetupContainer onClick={onCloseModal} />
			<TaskSetupModal>
				<TitleSection>
					<TitleInput placeholder="제목" value={taskTitle} onChange={onChangeTitle} />
				</TitleSection>
				<DescriptionSection>
					{/* <SectionTitle>내용</SectionTitle> */}
					<DescriptionTextarea
						value={taskDescription}
						placeholder="내용"
						onChange={e => setTaskDescription(e.target.value)}
					/>
				</DescriptionSection>
				<DateSection>
					{/* <SectionTitle>기간</SectionTitle> */}
					<DateWrap>
						<DateForm>
							<p>Start date</p>
							<DatePicker
								dateFormat="yyyy-MM-dd"
								selected={startDate}
								onChange={date => setStartDate(date)}
								customInput={<DatePickerCustomBtn text={start_date} />}
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
								customInput={<DatePickerCustomBtn text={end_date} />}
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
					<ChecklistInput
						placeholder="Add Checklist"
						value={listContent}
						onKeyPress={e => e.key === 'Enter' && onAddCheckList()}
						onBlur={onAddCheckList}
						onChange={onChangeContent}
					/>
					{currentCheckList.map((list, index) => (
						<ChecklistWrap
							className={list.checked ? 'checked' : ''}
							key={index}
							onClick={e => onChecked(e, index)}
						>
							<ChecklistCheckbox />
							<ChecklistItem key={index}>{list.content}</ChecklistItem>
						</ChecklistWrap>
					))}
				</ChecklistSection>
			</TaskSetupModal>
		</>
	);
};

export default TaskSettingModal;
