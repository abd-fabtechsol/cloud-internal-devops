import { create } from "apisauce";
import { store } from "../redux/store";
import { logout } from "../redux/counterSlice";
const baseURL ="https://worried-leggings-bull.cyclic.app/api";
const apiClient = create({
  baseURL:baseURL ,
});

apiClient.addRequestTransform(request => {
  const authToken = store?.getState()?.auth?.token
  if (!authToken) return;
  request.headers.authorization = "Bearer " + authToken;
});

apiClient?.addResponseTransform((response) => {
  // Handle response errors
  if (response.status === 401) {
    if(store?.getState()?.auth?.token){

    //   store.dispatch(logout())
    }

  } else if (response.status === 403) {
    // toast.error('Restricted Route!!');
  }
});

function setAuthToken(token) {
  apiClient.setHeader("authorization", `Bearer ${token}`);
}

export { setAuthToken };
export default apiClient;