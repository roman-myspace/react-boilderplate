import { Outlet } from "react-router-dom";
import Home from "../pages";


let homeRoutes = [
    {
        path: "/",
        element: (
            <Outlet />
        ),
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]

export default homeRoutes;