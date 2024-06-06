import { useState } from "react";
import styled from "styled-components";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const Main = () => {
    //컴포넌트: 레이아웃, 회원가입 폼, 로그인 폼, 인풋, 버튼
    const [formState, setFormState] = useState("SIGN-IN");
    const changeSignTab = (tabName) => {
        setFormState(tabName);
        console.log("현재 state는 ", formState);
    };

    const TabArray = [
        {
            name: "SIGN-IN",
            isSelected: formState === "SIGN-IN",
        },
        {
            name: "SIGN-UP",
            isSelected: formState === "SIGN-UP",
        },
    ];
    return (
        <S.Wrapper>
            <S.Container>
                <S.Header>
                    {TabArray.map((tab, index) => {
                        //react는 map 함수의 return 값을 받으면 자동으로 parsing하므로 콤마는 자동으로 빠진다. 따라서  <S.Tab></S.Tab><S.Tab></S.Tab> 꼴이 된다.
                        return (
                            <S.Tab
                                key={index}
                                $isSelected={tab.isSelected}
                                onClick={() => changeSignTab(tab.name)}
                            >
                                {tab.name}
                            </S.Tab>
                        );
                    })}
                </S.Header>

                {/*<S.Header>
                    <S.Tab
                        id="SIGN-IN"
                        isSelected={formState === "SIGN-IN"}
                        onClick={(e) => {
                            changeSignTab(e.target.id);
                            console.log(formState);
                        }}
                    >
                        로그인
                    </S.Tab>
                    <S.Tab
                        id="SIGN-UP"
                        isSelected={formState === "SIGN-UP"}
                        onClick={(e) => {
                            changeSignTab(e.target.id);
                            console.log(formState);
                        }}
                    >
                        회원가입
                    </S.Tab>
                </S.Header>*/}

                {formState === "SIGN-IN" ? (
                    <SignInForm />
                ) : (
                    <SignUpForm setFormState={setFormState} />
                )}
                {/*isSelected는 공용 value??*/}
                {/*안에 들어갈 게 아무 것도 없으면 "/>"로 바로 닫음*/}
            </S.Container>
        </S.Wrapper>
    );
};

export default Main;
const Container = styled.div`
    width: 360px;
    border: 1px solid #999;
`;
const Header = styled.header`
    background-color: #00c7ae;
    display: flex;
`;
const Tab = styled.div`
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.$isSelected && "background-color: #e0e0e0;"}
    &:hover {
        background-color: ivory;
    }
    font-size: 2em;
    font-weight: bold;
    padding: 16px;
`;
const Wrapper = styled.div`
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const S = {
    //메모리가 조금 낭비되지만 웹 개발이므로 이 정도는 괜찮음
    Wrapper, //Key와 Value가 같으면 이렇게 축약 가능. 위의 Wrapper가 객체 안에 소속됨
    Container,
    Header,
    Tab,
};
