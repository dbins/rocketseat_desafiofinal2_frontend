import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  h1 {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Pedido = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const PedidoHeader = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 18px;
  }
  span {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
  strong {
    font-size: 14px;
    margin-top: 5px;
    font-weight: bold;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const Item = styled.div`
  display: flex;
  width: 49%;
  border: 1px solid #ddd;
  border-radius: 7px;
  padding: 5px;
  margin: 10px 0;
  img {
    height: 100px;
    width: 100px;
    margin-right: 15px;
  }
  div {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const Observacao = styled.strong`
  margin-top: 10px;
  font-size: 16px;
  color: #999;
`;

export const ButtonExcluir = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 16px;
  padding: 5px;
  color: #ffff;
  background: #e83030;
`;

export const ButtonPago = styled.button`
  margin-top: 10px;
  font-size: 16px;
  color: #ffffff;
  padding: 5px;
  background: #013220;
`;
