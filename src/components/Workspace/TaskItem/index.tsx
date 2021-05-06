import React, { MouseEvent, useCallback } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { taskSelector } from '../../../reducer/workspace';
import { TaskListData } from '../DragAndDropArea';
import { TaskContainer, TaskItemContainer } from './styles';

interface Props {
	taskList: TaskListData;
	listIndex: number;
	setShowTaskSetting: (active: boolean) => void;
	setTaskName: (active: string) => void;
}

const TaskItem = ({ taskList, listIndex, setShowTaskSetting, setTaskName }: Props): JSX.Element => {
	const taskInitalData = useSelector(taskSelector);

	const onShowTaskDetail = useCallback((task: string, e: MouseEvent): void => {
		e.stopPropagation();
		setShowTaskSetting(true);
		setTaskName(task);
	}, []);

	return (
		<Droppable droppableId={`TaskItem-${listIndex}`} type="TaskItem">
			{provided => (
				<TaskContainer ref={provided.innerRef}>
					{taskList.tasks.map((task, itemIndex) => (
						<Draggable key={task} draggableId={String(task)} index={itemIndex}>
							{provided => (
								<TaskItemContainer
									ref={provided.innerRef}
									{...provided.dragHandleProps}
									{...provided.draggableProps}
									onClick={e => onShowTaskDetail(task, e)}
								>
									{taskInitalData.taskItem[task].title}
								</TaskItemContainer>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</TaskContainer>
			)}
		</Droppable>
	);
};

export default TaskItem;
