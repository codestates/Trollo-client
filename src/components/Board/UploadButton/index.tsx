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
import { useDispatch, useSelector } from 'react-redux';
import { axiosAddContent } from '../../../reducer/board';
import { getLoginInfoSelector } from '../../../reducer/accessToken';

interface Props {
	showModal: boolean;
	setShowModal: (active: boolean) => void;
}

const UploadButton = ({ showModal, setShowModal }: Props): JSX.Element => {
	const dispatch = useDispatch();
	const userAccessToken = useSelector(getLoginInfoSelector);
	const [title, onChangeTitle] = useInput<string>('');

	const onCloseModal = useCallback(() => {
		setShowModal(false);
	}, []);

	const onCreateContent = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (title.trim() === '') {
			return;
		}
		const authorization = `Bearer ${userAccessToken.accessToken}`;
		const LoginType = userAccessToken.LoginType;

		dispatch(axiosAddContent(title, authorization, LoginType));
		setShowModal(false);
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
