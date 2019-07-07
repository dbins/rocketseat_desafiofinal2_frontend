import { combineReducers } from "redux";
import login from "./login";
import pedidos from "./pedidos";

export default combineReducers({
  login,
  pedidos
});
