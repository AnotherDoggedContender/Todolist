import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../pages/main/main";
import { Todo } from "../../pages/todo/_todo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: "/todo/:todoId",
        element: <Todo></Todo>,
    },
]);

export default router;
