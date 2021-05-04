import React from 'react';
import { useSelector } from 'react-redux';
import { BoardState } from '../../../../type/type';
// import { deletedContentAction } from '../../../../reducer/board';
// import Pagination from '../../../Pagination';
const TableList = (): JSX.Element => {
	// const dispatch = useDispatch();
	const contents = useSelector((state: BoardState) => state.content);
	// const selectedContentId = useSelector((state: BoardState) => state.selectedContent);
	// const [posts, setPosts] = useState([]);
	// const [currentPage, setCurrentPage] = useState(1);
	// const [postsPerPage] = useState(10);

	//TODO: pagination 구현
	// Get current posts
	// const indexOfLast = currentPage * postsPerPage;
	// const indexOfFirst = indexOfLast - postsPerPage;
	// const currentContents = posts.slice(indexOfFirst, indexOfLast);

	// Change page
	// const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

	// const selectedContent =
	// 	(selectedContentId && contents.find(content => content.id === selectedContentId)) || null;
	// const onDeleteContent = (): void => {
	// 	if (!selectedContentId) {
	// 		return;
	// 	}
	// 	dispatch(deletedContentAction({ id: selectedContentId }));
	// };

	// const { id } = useParams<{ id?: string }>();

	// const onContentView = () => {
	// 	history.push(`/Board/Board/${id}`);
	// };

	return <></>;
};

export default TableList;
