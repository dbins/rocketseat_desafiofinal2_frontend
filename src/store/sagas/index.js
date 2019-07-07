import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";
import { Types as PedidosTypes } from "../ducks/pedidos";

import { login, logout } from "./login";
import { listarPedidos, apagarPedido, atualizarPedido } from "./pedidos";

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(LoginTypes.LOGOUT, logout),
    takeLatest(PedidosTypes.PEDIDO_REQUEST, listarPedidos),
    takeLatest(PedidosTypes.PEDIDO_DELETE, apagarPedido),
    takeLatest(PedidosTypes.PEDIDO_UPDATE, atualizarPedido)
  ]);
}
