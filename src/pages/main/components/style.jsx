import { styled } from "styled-components";
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px; //이거 줄이니까 input박스가 튀어 나오네
    /* width: 100%; 왜 이거 하면 요소가 튀어나오지?*/
`;

export { Form };
