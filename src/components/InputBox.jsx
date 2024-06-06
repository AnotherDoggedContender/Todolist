import styled, { css } from "styled-components";
const InputBox = ({ label, size, ...props }) => {
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.Input size={size} {...props}></S.Input>
        </S.InputContainer>
    );
};

export default InputBox;
const sizeCSS = {
    1: css`
        width: 100%;
        height: 30px;
    `,
    2: css`
        width: 300px;
        height: 48px;
    `,
    3: css`
        width: 100%;
        height: 48px;
    `,
};
const InputContainer = styled.div`
    position: relative;
    margin-bottom: 16px;
`;
const Input = styled.input`
    ${(props) => {
        return sizeCSS[props.size];
    }}
    border-radius: 4px;
    padding-left: 16px;
    border-width: 0.5px;
    border-color: #999;
`;
const Label = styled.label`
    position: absolute;
    top: -0.8em;
    left: 1em;
    background-color: white;
    color: #999;
`;

const S = {
    InputContainer,
    Input,
    Label,
};
