import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import Main from "./pages/dashboard/Main";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { element: <Main />, index: true }
        ]

    },
    {
        path: "*",
        element: <NotFound />
    },

]);

export default routes;