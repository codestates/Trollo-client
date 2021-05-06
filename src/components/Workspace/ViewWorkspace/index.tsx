import React from 'react';
import { useSelector } from 'react-redux';
import { taskSelector } from '../../../reducer/workspace';
import { TaskData } from '../../../type/type';
import { DragAndDropContainer, WorksapceContainer } from '../DragAndDropArea/styles';
import { TaskItemContainer, TaskContainer } from '../TaskItem/styles';
import { TaskListContainer, TaskListTop, Title, AddTaskInput } from '../TaskList/styles';

interface Props {
	taskData: TaskData;
}

const ViewWorkspace = ({ taskData }: Props): JSX.Element => {
	console.log('view!!!!!!!', taskData);
	return (
		<WorksapceContainer>
			<DragAndDropContainer>
				{taskData.taskList.map((list, index) => (
					<TaskListContainer key={index} color={list.color}>
						<TaskListTop>
							<Title>
								<p>{list.title}</p>
							</Title>
						</TaskListTop>
						<AddTaskInput placeholder="+ Add Task" maxLength={0} />
						<TaskContainer>
							{list.tasks.map((item, index) => (
								<TaskItemContainer key={index}>{taskData.taskItem[item].title}</TaskItemContainer>
							))}
						</TaskContainer>
					</TaskListContainer>
				))}
			</DragAndDropContainer>
		</WorksapceContainer>
	);
};
export default ViewWorkspace;
