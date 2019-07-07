import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";

import { Container, Form, Erro } from "./styles";
import Logo from "../../assets/logo.png";

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      error: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
    })
  };

  state = {
    email: "",
    password: ""
  };

  autenticar = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { loginRequest } = this.props;
    let continuar = true;
    if (email === "") {
      alert("Por favor informe o seu e-mail!");
      continuar = false;
    } else {
      if (password === "") {
        alert("Por favor informe sua senha!");
        continuar = false;
      }
    }
    if (continuar) {
      loginRequest(email, password);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Form onSubmit={this.autenticar}>
          <img src={Logo} alt="Logo" />
          <input
            type="email"
            placeholder="Seu e-mail"
            name="email"
            value={email}
            onChange={this.alterar}
          />
          <input
            type="password"
            placeholder="Senha secreta"
            name="password"
            value={password}
            onChange={this.alterar}
          />
          <button type="submit">Entrar</button>
          {this.props.login.error && (
            <Erro>
              <span>
                Houve um problema com o login e a senha informados. Por favor
                verifique se estão corretos e se você tem permissão para acessar
                este sistema
              </span>
            </Erro>
          )}
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
