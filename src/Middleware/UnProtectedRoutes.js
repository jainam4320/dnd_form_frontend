import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function UnProtectedRoutes({ element: Component, ...rest }) {

    const UnProtectedRoutes = () => {
        const token = cookies.get("TOKEN");
        return token ? <Navigate to="/forms/list" /> : <Outlet />;
    }

    return (
        UnProtectedRoutes()
    );
}