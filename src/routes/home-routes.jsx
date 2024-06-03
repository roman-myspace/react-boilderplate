import { Outlet } from "react-router-dom";
import Home from "../pages";
import FrontendLayout from "../components/4_templates/frontend";


let homeRoutes = [
    {
        path: "/",
        element: (
            <FrontendLayout>
                <Outlet />
            </FrontendLayout>
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