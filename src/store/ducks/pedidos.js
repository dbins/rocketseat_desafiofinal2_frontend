/**
 * Types & Creators
 */
export const Types = {
  PEDIDO_REQUEST: "pedido/request",
  PEDIDO_SUCCESS: "pedido/success",
  PEDIDO_FAILURE: "pedido/logout",
  PEDIDO_UPDATE: "pedido/update",
  PEDIDO_DELETE: "pedido/delete"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

/**
 * Reducers
 */

export default function pedidos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PEDIDO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Types.PEDIDO_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null
      };
    case Types.PEDIDO_FAILURE:
      return {
        ...state,
        error: action.payload.data,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  getPedidoRequest: data => ({
    type: Types.PEDIDO_REQUEST,
    payload: { data }
  }),
  getPedidoSuccess: data => ({ type: Types.PEDIDO_SUCCESS, payload: { data } }),
  getPedidoFailure: data => ({ type: Types.PEDIDO_FAILURE, payload: { data } }),
  getPedidoDelete: data => ({
    type: Types.PEDIDO_DELETE,
    payload: { data }
  }),
  getPedidoUpdate: data => ({
    type: Types.PEDIDO_UPDATE,
    payload: { data }
  })
};
