import React, { useState } from 'react';
import TableWrapper from '../Structure/TableWrapper';
import TableRow from '../Structure/TableRow';
import TableColumn from '../Structure/Tablecolumn';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BoardState } from '../../../../type/type';
import { deletedContentAction } from '../../../../reducer/board';
import Pagination from '../../../Pagination';
import { ColumnEmail, ColumnCreateAt, ColumnTitle, ColumnNumber } from './styles';

const TableList = (): JSX.Element => {
	const history = useHistory();
	const dispatch = useDispatch();
	const contents = useSelector((state: BoardState) => state.content);
	const selectedContentId = useSelector((state: BoardState) => state.selectedContent);
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	//TODO: pagination 구현
	// Get current posts
	const indexOfLast = currentPage * postsPerPage;
	const indexOfFirst = indexOfLast - postsPerPage;
	const currentContents = posts.slice(indexOfFirst, indexOfLast);

	// Change page
	const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

	const selectedContent =
		(selectedContentId && contents.find(content => content.id === selectedContentId)) || null;
	const onDeleteContent = (): void => {
		if (!selectedContentId) {
			return;
		}
		dispatch(deletedContentAction({ id: selectedContentId }));
	};

	// const { id } = useParams<{ id?: string }>();

	// const onContentView = () => {
	// 	history.push(`/Board/Board/${id}`);
	// };

	return (
		<>
			<TableWrapper headersName={['번호', '제목', '작성자', '등록일']}>
				{contents.map((content, index) => {
					return (
						<TableRow key={index}>
							<ColumnNumber>
								<TableColumn>{content.id}</TableColumn>
							</ColumnNumber>
							<ColumnTitle>
								<TableColumn>
									<Link to={`/Board/Board/${content.id}`}>{content.title}</Link>
								</TableColumn>
							</ColumnTitle>
							<ColumnEmail>
								<TableColumn>{content.email}</TableColumn>
							</ColumnEmail>
							<ColumnCreateAt>
								<TableColumn>{content.createAt}</TableColumn>
							</ColumnCreateAt>

							{/* <TableColumn>{selectedContent === null ? (

								)}</TableColumn> */}
						</TableRow>
					);
				})}
				<Pagination postsPerPage={postsPerPage} totalPosts={contents.length} paginate={paginate} />
			</TableWrapper>
		</>
	);
};

export default TableList;
