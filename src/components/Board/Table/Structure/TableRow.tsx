import React, { ReactNode } from 'react';
import { Column, Row } from './styles';

interface Props {
    children: ReactNode
}

const TableRow = ({ children }: Props) => {
    return (
        <Row>
            {
                children
            }
        </Row>
    )
};

export default TableRow;