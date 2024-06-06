import styled from "styled-components";
import InputBox from "../../../components/InputBox";
import TDButton from "../../../components/TDButton";
import { Form } from "./Style";
const InputBoxArray = [
    {
        name: "email",
        label: "이메일",
        size: 3,
        option: {
            placeholder: "이메일을 입력하시오(복사본)",
        },
    },
    {
        name: "password",
        label: "비밀번호",
        size: 3,
    },
    {
        name: "password_confirm",
        label: "비밀번호 확인",
        size: 3,
    },
];
const SignUpForm = ({ onSubmit }) => {
    console.log({ onSubmit });
    return (
        <S.Container>
            <S.Form>
                {InputBoxArray.map((props) => {
                    return (
                        <InputBox
                            key={props.name}
                            label={props.label}
                            placeholder={
                                props.option
                                    ? props.option.placeholder
                                    : props.name
                            }
                            size={props.size}
                        />
                    );
                })}
            </S.Form>
            <TDButton
                variant="primary-text"
                size="full"
                shape="round"
                txt="회원가입"
                onClick={() => {
                    console.log("회원가입 눌림");
                    onSubmit("SIGN-IN");
                }}
            ></TDButton>
        </S.Container>
    );
};

export default SignUpForm;
const Container = styled.div``;

const S = {
    Container,
    Form,
};
