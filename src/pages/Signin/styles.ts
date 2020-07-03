import styled from 'styled-components';

import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  /**
    O height 100vh faz com que o container ocupe 100% da área visual do usuário.
    O display flex faz com que os itens fiquem soltos, uns ao lado do outro
    O align-itens: stretch faz com que os itens se estiquem para ocupar todo o espaço conforme ordenamos
   */
  align-items: stretch;
`;

export const Content = styled.div`
  /**
  Aqui o display flex serve para colocar um elemento ao lado do outro
  O flex direction serve para direcionar os elementos em coluna
  O place-content centraliza as divs em todas as direções
   */
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    /**Margin para separar os elementos em 80px em cima e em baixo, e 0 nos lados */
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  /**
  Flex 1 faz com que o elemento ocupe todo o espaço restante para o mesmo
  Já que limitamos a div de content para 700px, o background irá ocupar o resto
  O backgroud-size cover aqui tem como função fazer a imagem cobrir todo o espaço restante
  Se tirarmos essa propriedade, a imagem irá ocupar um espaço menor e ficará com vazios nas bordas
   */
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
