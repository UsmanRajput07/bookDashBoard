import { BrowserRouter, Route, Routes } from "react-router";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Layout from "@/pages/layout/Layout";
import Home from "@/pages/Home";
import AuthLayout from "@/pages/layout/AuthLayout";
import CreateBook from "@/pages/CreateBook";
import Books from "@/pages/books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="dashBoard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="createBook" element={<CreateBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
