import styled, { css } from 'styled-components';

const width = '65%',
    height = '1000px';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: ${width};
    height: ${height};
`;

export const SlideContent = styled.section`
    width: 100%;
    height: ${height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3srem;
`;

export const Arrow = styled.div`
    text-shadow: 1px 1px 1px #fff;
    z-index: 100;
    line-height: ${height};
    text-align: center;
    position: absolute;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${(props) =>
    props.right
        ? css`left: 90%;`
        : css`left: 0%;`}
`;

export const ExampleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 40%;
`;