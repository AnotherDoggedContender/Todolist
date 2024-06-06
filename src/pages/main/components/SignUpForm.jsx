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

const SignUpForm = ({ setFormState }) => {
    //props는 변수의 참조값을 갖고 오나?
    function onSubmitSignUp(e) {
        e.preventDefault();
        const email = e.target.email.value;
        alert(`${email}님 환영합니다.`);
        setFormState("SIGN-IN");
    }
    return (
        <S.Form onSubmit={onSubmitSignUp}>
            {/* onSubmit 때문에 event 자리에 form이 들어간다. */}
            {InputBoxArray.map((props) => {
                return (
                    <InputBox
                        name={props.name}
                        key={props.name}
                        label={props.label}
                        placeholder={
                            props.option ? props.option.placeholder : props.name
                        }
                        size={props.size}
                    />
                );
            })}
            <TDButton
                variant="primary-text"
                size="full"
                shape="round"
                txt="회원가입"
                type="submit"
            ></TDButton>
        </S.Form>
    );
};

export default SignUpForm;
const Container = styled.div``;

const S = {
    Container,
    Form,
};
