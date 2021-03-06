import styled from '@emotion/styled';

export const TaskContainer = styled.div`
	overflow-y: auto;
	width: 100%;
	min-height: 250px;
	max-height: 450px;
	padding: 2px;
	border-radius: 4px;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}
`;

export const TaskItemContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 15px 20px;
	margin-bottom: 10px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
	// ex
	font-size: 17px;
`;
