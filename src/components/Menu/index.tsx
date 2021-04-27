import React, { useCallback, FC, CSSProperties } from 'react';
import { CloseModalButton, CreateMyPage } from './styles';
import { GrClose } from 'react-icons/gr'

interface Props {
    children: React.ReactNode
    show: boolean;
    onCloseModal: (e: any) => void;
    style: CSSProperties;
}

const Menu = ({ children, style, show, onCloseModal }: Props) => {
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
    }, []);

    if (!show) {
        return null;
    }

    return (
        <CreateMyPage onClick={onCloseModal}>
            <div style={style} onClick={stopPropagation}>
                {children}
            </div>
        </CreateMyPage>
    )
};

export default Menu;