import React, { useCallback, FormEvent } from 'react';
import { IoMdClose } from 'react-icons/io';
import useInput from '../../../hooks/useInput';
import {
	ModalBackground,
	ModalContent,
	ModalWrapper,
	Button,
	CloseModalButton,
	ModalForm,
	ModalLabel,
	ModalInput,
	ModalTitle,
} from '../UploadButton/styles';
// import { useSelector, useDispatch } from 'react-redux';
// import { BoardState } from '../../../type/type';
// import { createContentAction } from '../../../reducer/board';

interface Props {
	showModal: boolean;
	setShowModal: (active: boolean) => void;
}

const UploadButton = ({ showModal, setShowModal }: Props): JSX.Element => {
	// const dispatch = useDispatch();
	// const content = useSelector((state: BoardState) => state.content);
	// const selectedContent = useSelector((state: BoardState) => state.selectedContent);
	const [title, onChangeTitle] = useInput<string>('');
	// const [createContent, setCreateContent] = useState<string>('');

	const onCloseModal = useCallback(() => {
		setShowModal(false);
	}, []);

	const onCreateContent = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (title.trim() === '') {
			return;
		}

		// dispatch(
		// 	createContentAction({
		// 		email: 'useong0830',
		// 		title: title,
		// 		content: 'test',
		// 		createAt: '2021-04-29',
		// 	}),
		// );
		// setShowModal(false);
		// setCreateContent('');
	};

	return (
		<>
			{showModal && (
				<>
					<ModalBackground onClick={onCloseModal}></ModalBackground>
					<ModalWrapper>
						<ModalContent>
							<ModalForm onSubmit={onCreateContent}>
								<ModalTitle>🎉 자신의 칸반 보드를 자랑해 보세요! 🎉</ModalTitle>
								<ModalLabel>
									<ModalInput
										type="title"
										id="title"
										name="title"
										placeholder="제목을 입력하고 제출하면 바로 업로드 됩니다."
										value={title}
										onChange={onChangeTitle}
									/>
								</ModalLabel>
								<Button type="submit">확인</Button>
							</ModalForm>
						</ModalContent>
						<CloseModalButton onClick={onCloseModal}>
							<IoMdClose />
						</CloseModalButton>
					</ModalWrapper>
				</>
			)}
		</>
	);
};

export default UploadButton;
