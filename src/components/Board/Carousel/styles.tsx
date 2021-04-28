import styled from '@emotion/styled';

export const SlickWrapper = styled.div`
    width: 100%;    
    height: 300px;
`;

export const TestImg = styled.img`

`;

export const Indicator = styled.div`
    text-align: center;
    & > div {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        background: #313131;
        display: inline-block;
        text-align: center;
        color: black;
        font-size: 15px;
    }
`;

export const ImgWrapper = styled.div`
    margin-top: 3.5rem;
    text-align: center;
    height: 300px;
    width: 100%;
    padding: 32px;
    &img {
        margin: 0 auto;
    }
`;