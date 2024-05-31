import { Outlet } from "react-router-dom";
import AuthGuard from "../@guards/auth-guard";
import Dashboard from "../pages/admin";
import AnalyticsDashboard from "../pages/admin/analytics-dashboard";


let adminRoutes = [
    {
        path: "/admin",
        element: <AuthGuard><Outlet /></AuthGuard>,
        children: [
            {
                index: true,
                element: <Dashboard />
            }, {
                path: "analytics-dashboard",
                element: <AnalyticsDashboard />
            }
        ]
    }
]

export default adminRoutes;