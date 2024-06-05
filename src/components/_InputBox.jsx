import styled from "styled-components";
const InputBox = (props) => {
    console.log(`props 출력`);
    console.log(props);
    return (
        <S.InputContainer>
            <S.InputLabel>{props.label}</S.InputLabel>
            <S.Input placeholder={props.placeholder}></S.Input>
        </S.InputContainer>
    );
};

export default InputBox;

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 16px;
`;
const Input = styled.input`
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding-left: 16px;
    border-width: 0.5px;
    border-color: #999;
`;
const InputLabel = styled.label`
    position: absolute;
    top: -0.8em;
    left: 1em;
    background-color: white;
    color: #999;
`;

const S = {
    InputContainer,
    Input,
    InputLabel,
};
