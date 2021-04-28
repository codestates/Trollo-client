import React, { useState } from 'react';
import Navbar from '../../components/Common/Navbar';
import Test from '../../images/test.png';
import Carousel from '../../components/Board/Carousel';
import Table from '../../components/Board/Table';

const Board = (): JSX.Element => {

    return (
        <>
            <Navbar />
            <Carousel images={Test}/>
            <Table />
        </>
    )
};

export default Board;

// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
