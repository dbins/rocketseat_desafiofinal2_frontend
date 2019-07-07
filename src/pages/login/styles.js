import styled from "styled-components";
import Fundo from "../../assets/fundo.jpg";

export const Container = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    transparent url(${Fundo});
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  img {
    width: 72px;
    height: 72px;
    margin-bottom: 25px;
  }
  input {
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 7px;
    margin-bottom: 10px;
    padding: 0 20px;
    font-size: 16px;
    color: #8f8f8f;
  }
  button {
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 7px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    background: #e83030;
    &:hover {
      background: #ad1f1f;
    }
  }
`;

export const Erro = styled.div`
  margin-top: 40px;
  padding: 10px;
  display: flex;
  width: 100%;
  height: 92px;
  flex-direction: column;
  background: #e83030;
  span {
    font-size: 12px;
    color: #fff;
    margin-top: 5px;
    font-weight: bold;
  }
`;
