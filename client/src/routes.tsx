import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import Main from "./pages/dashboard/Main";
import Settings from "./pages/dashboard/Settings";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { element: <Main />, index: true },
            { path: "settings", element: <Settings /> }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "*",
        element: <NotFound />
    },


]);

export default routes;