import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import A from "./pages/A";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/a",
        element: <A />
    }
]);

export default routes;