import React, { ChangeEvent, useState } from 'react';
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

const SearchBar = (): JSX.Element => {
	const [title, onChangeTitle] = useInput<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);

	const onUploadModal = () => {
		setShowModal(prev => !prev);
	};

	const onChangeSearch = (e: ChangeEvent<HTMLSelectElement>) => {
		//TODO: 로직 생각중..
	};

	return (
		<>
			<SearchBarWrapper>
				<Upload onClick={onUploadModal}>게시글 올리기</Upload>
				<UploadButton showModal={showModal} setShowModal={setShowModal} />
				<SearchSelectBox>
					<Select onChange={onChangeSearch}>
						<Option value="제목">제목</Option>
						<Option value="작성자">작성자</Option>
					</Select>
				</SearchSelectBox>
				<SearchForm>
					<SearchLabel>
						<SearchInput
							type="title"
							id="title"
							name="title"
							value={title}
							placeholder="검색어를 입력하세요."
							onChange={onChangeTitle}
						/>
						<SearchButton>
							<FiSearch />
						</SearchButton>
					</SearchLabel>
				</SearchForm>
			</SearchBarWrapper>
		</>
	);
};

export default SearchBar;
