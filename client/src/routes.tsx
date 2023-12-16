import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import A from "./pages/A";
import NotFound from "./pages/NotFound";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/a",
        element: <A />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default routes;