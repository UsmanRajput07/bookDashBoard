import { BrowserRouter, Route, Routes } from "react-router";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Layout from "@/pages/layout/Layout";
import Home from "@/pages/Home";
import Books from "@/pages/Books";
import AuthLayout from "@/pages/layout/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="dashBoard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
