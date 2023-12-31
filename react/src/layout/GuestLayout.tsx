import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();

    // if the user is logged in, redirect to the dashboard
    if (token) return <Navigate to="/users" />;

    return (
        <div>
            {/* Outlet: where the children will be rendered */}
            <Outlet />
        </div>
    );
};

export default GuestLayout;
