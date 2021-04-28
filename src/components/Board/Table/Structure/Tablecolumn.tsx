import React, { ReactNode } from 'react';
import { Column } from './styles';

interface Props {
    children: ReactNode
}

const TableColumn = ({ children }: Props) => {
    return (
        <Column>
            {
                children
            }
        </Column>
    )
};

export default TableColumn;