import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center h-screen bg-muted p-2">
      <ToastContainer />
      <Outlet />
    </div>
  );
}
