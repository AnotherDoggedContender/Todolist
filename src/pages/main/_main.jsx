import { useNavigate } from "react-router-dom";

const mockProducts = [
    //Main 함수 안에 넣으면 rerendering 시 메모리가 다시 할당된다
    {
        id: 3,
        category: "rank",
        name: "상품-1",
        price: 3000,
    },
    {
        id: 12,
        category: "random",
        name: "상품-2",
        price: 2000,
    },
];

function Main() {
    const handler = () => {};
    const navigation = useNavigate();
    return (
        <div onClick={handler}>
            {/*html 문법을 반환할 수 있고, 컴포넌트.js는 무조건 html 요소를 반환해야 한다*/}
            {mockProducts.map((product) => (
                //react에서는 map 이후에 각 요소에 key라는 속성을 줘야 한다.
                // <link
                //     to={`/todo/${product.id}?goods=${product.category}`}
                //     key={product.id}
                // >
                //     {product.name}
                // </link>
                <div
                    key={product.id}
                    onClick={() => {
                        // window.location.href = `/todo/${product.id}?goods=${product.category}`;
                        navigation(
                            `/todo/${product.id}?goods=${product.category}`
                        );
                    }}
                >
                    {product.name}
                </div>
            ))}
            메인 페이지입니다.
        </div>
    );
}
export default Main;
