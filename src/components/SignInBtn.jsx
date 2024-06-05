// 1. 입력: props.객체 키
// 2. 출력: 객체 키에 해당되는 css 변경
import styled, { css } from "styled-components";

const SignInBtn = ({ variant, size, ...props }) => {
    <button>스타일 변경</button>;
};

const variantCss = {
    primary: css`
        background-color: green;
        color: white;
    `,
    secondary: css`
        background-color: blue;
        color: white;
    `,
    "primary-text": css`
        color: green;
    `,
};

const sizeCss = {
    small: css`
        padding: 16px;
    `,
    medium: css`
        padding: 32px;
    `,
    full: css`
        width: 100%;
        aspect-ratio: 8/1;
    `,
};
const shapeCss = {
    round: css``,
};
const ButtonCss = styled.button`
    size: ;
`;
