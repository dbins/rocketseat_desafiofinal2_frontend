/**
 * Types & Creators
 */

export const Types = {
  LOGIN_REQUEST: "login/LOGIN_REQUEST",
  LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
  LOGIN_FAILURE: "login/LOGIN_FAILURE",
  LOGOUT: "login/LOGOUT"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: {},
  error: false,
  loading: false,
  signedIn: !!localStorage.getItem("@DonJuan:token"),
  token: localStorage.getItem("@DonJuan:token") || null
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        data: action.payload.data.user,
        token: action.payload.data.token,
        isAdmin: true,
        error: false,
        loading: false
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        signedIn: false,
        data: {},
        token: null,
        isAdmin: false,
        error: true,
        loading: false
      };
    case Types.LOGOUT:
      return {
        ...state,
        signedIn: false,
        loading: false,
        error: false,
        token: null
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),
  loginSuccess: data => ({ type: Types.LOGIN_SUCCESS, payload: { data } }),
  loginFailure: data => ({ type: Types.LOGIN_FAILURE, payload: { data } }),
  logout: data => ({ type: Types.LOGOUT, payload: { data } })
};
