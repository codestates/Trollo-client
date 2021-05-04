import React, { ReactNode } from 'react';
import { TableBody } from './styles';
import { Table, TableHeader, Tr } from './styles';

interface Props {
	headersName: string[];
	children: ReactNode;
}
{
	/* <BoardNotice>📢 칸반보드를 공유하고 트롤로 회원들과 소통하는 공간입니다!</BoardNotice> */
}
const TableWrapper = ({ headersName, children }: Props): JSX.Element => {
	return (
		<>
			<Table>
				<thead>
					<tbody>
						<Tr>
							{headersName.map((item: string, index: number) => {
								return <TableHeader key={index}>{item}</TableHeader>;
							})}
						</Tr>
						<tbody>{children}</tbody>
					</tbody>
				</thead>
			</Table>
		</>
	);
};

export default TableWrapper;
