import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/pt-br";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import { Creators as PedidosActions } from "../../store/ducks/pedidos";
import Header from "../../components/Header";

import {
  Content,
  Pedido,
  PedidoHeader,
  ItemsContainer,
  Item,
  Observacao,
  ButtonExcluir,
  ButtonPago
} from "./styles";

class Pedidos extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    pedidos: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          order: PropTypes.shape({
            id: PropTypes.number,
            created_at: PropTypes.date,
            valor: PropTypes.number,
            observacao: PropTypes.string,
            produtos: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number,
                imagem: PropTypes.string,
                titulo: PropTypes.string,
                tamanho: PropTypes.string
              })
            )
          })
        })
      )
    })
  };

  componentDidMount() {
    const { getPedidoRequest } = this.props;

    getPedidoRequest();
  }

  excluir = produto => {
    const { getPedidoDelete } = this.props;
    getPedidoDelete(produto);
  };

  atualizar = produto => {
    const { getPedidoUpdate } = this.props;
    getPedidoUpdate(produto);
  };

  render() {
    const { pedidos } = this.props;
    return (
      <>
        <Header />
        <Content>
          <h1>Últimos Pedidos</h1>
          {!pedidos.data.length && <p>Nenhum pedido adicionado</p>}
          {pedidos.data.map(order => (
            <Pedido key={order.id}>
              <PedidoHeader>
                <h2>
                  Pedido #{order.id} - {order.user.username}
                </h2>
                <span>{moment(order.created_at).fromNow()}</span>
                <strong>R${order.valor}</strong>
              </PedidoHeader>
              <ItemsContainer>
                {order.produtos.map(item => (
                  <Item key={item.id}>
                    <img src={`${item.imagem}`} alt="Order" />
                    <div>
                      <strong>{item.titulo} - x</strong>
                      <span>Tamanho: {item.tamanho}</span>
                    </div>
                  </Item>
                ))}
              </ItemsContainer>
              <Observacao>Observações: {order.observacao}</Observacao>
              <Observacao>
                <ButtonPago onClick={() => this.atualizar(order)}>
                  Marcar pedido como Pago
                </ButtonPago>
                <ButtonExcluir onClick={() => this.excluir(order)}>
                  Excluir Pedido
                </ButtonExcluir>
              </Observacao>
            </Pedido>
          ))}
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  pedidos: state.pedidos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...LoginActions, ...PedidosActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pedidos);
