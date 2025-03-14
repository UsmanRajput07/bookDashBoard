import axiosWrapper from "@/helper/axios";

function login(email: string, password: string) {
  return axiosWrapper.post("/users/login", { email, password });
}
function signup(data: { email: string; password: string; name: string }) {
  return axiosWrapper.post("/users/register", data);
}
export { login, signup };
