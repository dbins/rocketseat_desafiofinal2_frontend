import React, { Component } from "react";
import PropTypes from "prop-types";

import { IconContext } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import Logo from "../../assets/logo.png";

import {
  Container,
  LogoContainer,
  UserDataContainer,
  ButtonContainer,
  NavigationContainer
} from "./styles";

class Header extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    login: PropTypes.shape({
      data: PropTypes.shape({
        username: PropTypes.string
      })
    }).isRequired
  };

  render() {
    return (
      <Container>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
          <strong>Pizzaria Don Juan</strong>
        </LogoContainer>
        <NavigationContainer>
          <UserDataContainer>
            <strong>{this.props.login.data.username}</strong>
            <button type="button" onClick={this.props.logout}>
              Sair
            </button>
          </UserDataContainer>
          <ButtonContainer>
            <IconContext.Provider value={{ size: 16 }}>
              <FaShoppingBag />
            </IconContext.Provider>
          </ButtonContainer>
        </NavigationContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});
const Actions = { ...LoginActions };

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
