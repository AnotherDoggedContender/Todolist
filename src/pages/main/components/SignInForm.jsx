import styled from "styled-components";
import InputBox from "../../../components/InputBox";
import TDButton from "../../../components/TDButton";
import { Form } from "./Style";
const SignInForm = () => {
    return (
        <S.Container>
            <S.Form>
                <InputBox
                    label="이메일"
                    placeholder="이메일을 입력하시오(복사본)"
                    size={3}
                />
                <InputBox
                    label="비밀번호"
                    placeholder="비밀번호를 입력하시오(복사본)"
                    size={3}
                />
            </S.Form>
            <TDButton
                variant="primary-text"
                size="full"
                shape="round"
                txt="로그인"
            ></TDButton>
        </S.Container>
    );
};

export default SignInForm;
const Container = styled.div``;

const S = {
    Container,
    Form,
};
