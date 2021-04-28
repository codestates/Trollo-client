import React, { ReactNode } from 'react';
import { Table, TableHeader } from './styles';

interface Props {
	headersName: string[];
	children: ReactNode;
}

const TableWrapper = ({ headersName, children }: Props): JSX.Element => {
	return (
		<Table>
			<thead>
				<tr>
					{headersName.map((item: string, index: number) => {
						return <TableHeader key={index}>{item}</TableHeader>;
					})}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</Table>
	);
};

export default TableWrapper;
