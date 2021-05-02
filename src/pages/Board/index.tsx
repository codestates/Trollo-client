import React from 'react';
import Navbar from '../../components/Common/Navbar';
import Carousel from '../../components/Board/Carousel';
import Table from '../../components/Board/Table';
import SearchBar from '../../components/Board/SearchBar';
import { BoardContainer } from './styles';

const Board = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<BoardContainer>
				<Carousel />
				<SearchBar />
				<Table />
			</BoardContainer>
		</>
	);
};

export default Board;
