import React, { ReactNode } from 'react';
import { Column } from './styles';

interface Props {
	children: ReactNode;
}

const TableColumn = ({ children }: Props): JSX.Element => {
	return <Column>{children}</Column>;
};

export default TableColumn;
