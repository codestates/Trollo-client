import styled from '@emotion/styled';
// #eae6ff;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0.8rem 1.6rem;
    background-color: #eae6ff;;
    color:#2a3856;
    font-weight: bold;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Logo = styled.img`
    margin-top: 4px;
`;

export const MyPage = styled.div`
`;

export const ProfileImg = styled.img`
    border-radius: 100%;
`;

export const LogoutButton = styled.div`
    margin-top: 4px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: #fc7d13;
    }
`;

export const BoardOrWorkspace = styled.div`
    margin-top: 8px;
    height: 3.5rem;
    padding: 0.8rem 1.6rem;
    color:#2a3856;
    font-weight: bold;
`;

export const Divider = styled.span`
    margin: 0 28px;
`;