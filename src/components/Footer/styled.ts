import styled from "styled-components";

export const StyledImage = styled.div<{height: number, width: number, before: string, after: string, content: string}>`
    height: ${(props) => `${props.height}px`};
    width: ${(props)=> `${props.width}px`};
    background-image: ${(props) => `url(${props.before})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
        background-image: ${(props) => `url(${props.after})`};
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%
`;