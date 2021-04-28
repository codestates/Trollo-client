import React, { ReactNode } from 'react';
import { Row } from './styles';

interface Props {
	children: ReactNode;
}

const TableRow = ({ children }: Props): JSX.Element => {
	return <Row>{children}</Row>;
};

export default TableRow;
