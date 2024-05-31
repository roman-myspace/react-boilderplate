import { Outlet } from "react-router-dom";
import Signin from "../pages/auth/signin";
import Signup from "../pages/auth/signup";


let authRoutes = [
    {
        path: "/auth",
        element: <Outlet />,
        children: [
            {
                path: "signin",
                element: <Signin />
            }, {
                path: "signup",
                element: <Signup />
            }
        ]
    }
]

export default authRoutes;