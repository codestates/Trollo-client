import React from 'react';
import { PageLi, PageNext, PageUl, PageWrapper } from './styles';

interface Props {
	postsPerPage: number;
	totalPosts: number;
	paginate: any;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: Props): JSX.Element => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<>
			<PageWrapper>
				<PageUl>
					{pageNumbers.map(number => (
						<PageLi key={number}>
							<PageNext onClick={() => paginate(number)}>{number}</PageNext>
						</PageLi>
					))}
				</PageUl>
			</PageWrapper>
		</>
	);
};

export default Pagination;
