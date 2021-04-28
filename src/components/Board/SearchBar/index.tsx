import React, { useState, useCallback } from 'react';
import {
	ModalBackground,
	ModalContent,
	ModalWrapper,
	SearchBarWrapper,
	UploadButton,
} from './styles';

const SearchBar = (): JSX.Element => {
	const [showModal, setShowModal] = useState(false);

	const onClickUpload = useCallback(() => {
		setShowModal(prev => !prev);
	}, []);

	const onCloseUpload = useCallback(e => {
		e.stopPropagation();
		setShowModal(false);
	}, []);

	return (
		<SearchBarWrapper>
			<UploadButton onClick={onClickUpload}>
				<button>칸반보드 자랑하기</button>
				{showModal && (
					<ModalBackground>
						<ModalWrapper>
							<ModalContent>안녕</ModalContent>
						</ModalWrapper>
					</ModalBackground>
				)}
			</UploadButton>
		</SearchBarWrapper>
	);
};

export default SearchBar;
