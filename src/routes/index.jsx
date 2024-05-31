import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import homeRoutes from "./home-routes";
import authRoutes from "./auth-routes";
import adminRoutes from "./admin-routes";




const router = createBrowserRouter([

    // home routes
    ...homeRoutes,

    // Auth Routes
    ...authRoutes,

    // Admin Routes
    ...adminRoutes
]);

export default function Router() {
    return <RouterProvider router={router} />
}