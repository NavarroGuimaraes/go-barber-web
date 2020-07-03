import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="www.google.com">Esqueci Minha Senha</a>
        </Form>

        <Link to="/signup">
          <FiLogIn />
          Quero criar uma conta
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default Signin;
