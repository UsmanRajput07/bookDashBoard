import { BrowserRouter, Route, Routes } from "react-router";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Layout from "@/pages/layout/Layout";
import Home from "@/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
