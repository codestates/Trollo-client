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
} from './styles';
import { useDispatch } from 'react-redux';
import { axiosAddContent } from '../../../reducer/board';

interface Props {
	showModal: boolean;
	setShowModal: (active: boolean) => void;
}

const UploadButton = ({ showModal, setShowModal }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const [title, onChangeTitle, setTitle] = useInput<string>('');

	const onCloseModal = useCallback(() => {
		setShowModal(false);
	}, []);

	const onCreateContent = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (title.trim() === '') {
			return;
		}

		dispatch(axiosAddContent(title));
		setShowModal(false);
		setTitle('');
	};

	return (
		<>
			{showModal && (
				<>
					<ModalBackground onClick={onCloseModal}></ModalBackground>
					<ModalWrapper>
						<ModalContent>
							<ModalForm onSubmit={onCreateContent}>
								<ModalTitle>π μμ μ μΉΈλ° λ³΄λλ₯Ό μλν΄ λ³΄μΈμ! π</ModalTitle>
								<ModalLabel>
									<ModalInput
										type="title"
										id="title"
										name="title"
										placeholder="μ λͺ©μ μλ ₯νκ³  μ μΆνλ©΄ λ°λ‘ μλ‘λ λ©λλ€."
										value={title}
										onChange={onChangeTitle}
									/>
								</ModalLabel>
								<Button type="submit">νμΈ</Button>
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
