// 1. 입력: props.객체 키
// 2. 출력: 객체 키에 해당되는 css 변경
import styled, { css } from "styled-components";

const TDButton = ({ variant, size, shape, txt, ...props }) => {
    return (
        <S.Button
            variant={variant}
            size={size}
            shape={shape}
            txt={txt}
            onClick={props.onClick}
            type={props.type}
        >
            {txt}
        </S.Button>
    );
};
export default TDButton;
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
    round: css`
        border-radius: 50%;
    `,
    normal: css`
        border-radius: 8px;
    `,
};
const Button = styled.button`
    ${(props) => {
        return variantCss[props.variant];
    }}
    ${(props) => {
        return sizeCss[props.size];
    }}
    ${(props) => {
        return shapeCss[props.shape];
    }}
`;

const S = {
    Button,
};
