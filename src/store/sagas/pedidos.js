import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as PedidosActions } from "../ducks/pedidos";

export function* listarPedidos() {
  try {
    const { data } = yield call(api.get, "/pedidos?status=PENDENTE");
    yield put(PedidosActions.getPedidoSuccess(data));
  } catch (err) {
    yield put(PedidosActions.getPedidoFailure(err));
  }
}

export function* atualizarPedido(pedido) {
  let dados = pedido.payload.data;
  const id = dados.id;
  try {
    yield call(api.put, "/pedidos/" + id, { status: "PAGO" });
    //Atualizar a lista de pedidos!
    const { data } = yield call(api.get, "/pedidos?status=PENDENTE");
    yield put(PedidosActions.getPedidoSuccess(data));
  } catch (err) {
    //Erro atualizar pedido
  }
}

export function* apagarPedido(pedido) {
  const { id } = pedido.payload.data;
  try {
    yield call(api.delete, "/pedidos/" + id);
    //Atualizar a lista de pedidos!
    const { data } = yield call(api.get, "/pedidos?status=PENDENTE");
    yield put(PedidosActions.getPedidoSuccess(data));
  } catch (err) {
    //Erro apagar pedido
  }
}
