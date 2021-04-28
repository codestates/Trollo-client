import React, { useCallback, CSSProperties, ReactNode } from 'react';
import { CreateMyPage } from './styles';

interface Props {
    children: ReactNode;
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