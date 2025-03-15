import axiosWrapper from "@/helper/axios";

function login(data: { email: string; password: string }) {
  return axiosWrapper.post("/users/login", data);
}
function signup(data: { email: string; password: string; name: string }) {
  return axiosWrapper.post("/users/register", data);
}
export { login, signup };
