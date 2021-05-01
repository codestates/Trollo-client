import React, { ReactNode } from 'react';
import { BoardNotice, TableContainer, Tbody } from './styles';
import { Table, TableHeader, Tr } from './styles';

interface Props {
	headersName: string[];
	children: ReactNode;
}

const TableWrapper = ({ headersName, children }: Props): JSX.Element => {
	return (
		<TableContainer>
			<Table>
				<BoardNotice>📢 칸반보드를 공유하고 트롤로 회원들과 소통하는 공간입니다!</BoardNotice>
				<Tbody>
					<thead>
						<Tr>
							{headersName.map((item: string, index: number) => {
								return <TableHeader key={index}>{item}</TableHeader>;
							})}
						</Tr>
					</thead>
					<tbody>{children}</tbody>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default TableWrapper;
