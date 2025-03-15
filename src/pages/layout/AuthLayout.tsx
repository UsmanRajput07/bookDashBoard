import authToken from "@/zustand/store";
import { Navigate, Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  const token = authToken((state) => state.token);
  if(token !== "") return <Navigate to="/dashBoard" replace />
  return (
    <div className="flex items-center justify-center h-screen bg-muted p-2">
      <ToastContainer />
      <Outlet />
    </div>
  );
}
