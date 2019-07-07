import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as LoginActions } from "../ducks/login";

export function* login(data) {
  const { email, password } = data.payload;
  try {
    const resultado = yield call(api.post, "sessions", {
      email,
      password,
      origin: "WEB"
    });

    if (resultado.status === 200) {
      const data = resultado.data;
      if (data.user.type === "ADMIN") {
        localStorage.setItem("@DonJuan:token", data.token.token);
        yield put(LoginActions.loginSuccess(data));
        yield call(history.push, "/pedidos");
      } else {
        yield put(LoginActions.loginFailure({}));
      }
    } else {
      yield put(LoginActions.loginFailure({}));
    }
  } catch (err) {
    yield put(LoginActions.loginFailure(err));
  }
}

export function* logout() {
  localStorage.removeItem("@DonJuan:token");
  localStorage.removeItem("@DonJuan:isAdmin");

  yield call(history.push, "/");
}
