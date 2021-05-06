import React, { useState, ChangeEvent } from 'react';
import useInput from '../../../hooks/useInput';
import UploadButton from '../UploadButton';
import {
	SearchBarWrapper,
	SearchButton,
	SearchForm,
	SearchInput,
	SearchLabel,
	SearchSelectBox,
	Select,
	Upload,
	Option,
} from './styles';
import { FiSearch } from 'react-icons/fi';

// interface Props {
// 	onSubmit: any;
// }

const SearchBar = (): JSX.Element => {
	const [title, onChangeTitle, setTitle] = useInput<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);

	const onUploadModal = () => {
		setShowModal(prev => !prev);
	};

	const onChangeSearch = (e: ChangeEvent<HTMLFormElement>) => {
		//TODO: 로직 생각중..
		e.preventDefault();
		console.log(onChangeTitle);

		setTitle('');
	};

	return (
		<>
			<SearchBarWrapper>
				<Upload onClick={onUploadModal}>게시글 올리기</Upload>
				<UploadButton showModal={showModal} setShowModal={setShowModal} />
				<SearchSelectBox>
					<Select>
						<Option value="제목">제목</Option>
						<Option value="작성자">작성자</Option>
					</Select>
				</SearchSelectBox>
				<SearchForm onSubmit={onChangeSearch}>
					<SearchLabel>
						<SearchInput
							name="filter"
							value={title}
							placeholder="검색어를 입력하세요."
							onChange={onChangeTitle}
						/>
						<SearchButton type="submit">
							<FiSearch />
						</SearchButton>
					</SearchLabel>
				</SearchForm>
			</SearchBarWrapper>
		</>
	);
};

export default SearchBar;
