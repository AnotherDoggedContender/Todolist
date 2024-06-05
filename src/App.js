import { RouterProvider } from "react-router-dom";
import todoRouter from "./libs/routes/router";
import "./App.css";

function App() {
    return <RouterProvider router={todoRouter} />; // todoRouter 안의 URL을 등록하고, 감시하며, 생성한다.
}

export default App;
