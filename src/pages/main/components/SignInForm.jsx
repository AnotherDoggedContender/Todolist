import styled from "styled-components";
import InputBox from "../../../components/InputBox";
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
            <S.Button></S.Button>
        </S.Container>
    );
};

export default SignInForm;
const Container = styled.div``;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    /* width: 100%; 왜 이거 하면 요소가 튀어나오지?*/
`;

const S = {
    Container,
    Form,
};