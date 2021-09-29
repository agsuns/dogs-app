import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import styles from './LoginForm.module.css';
import { GET_USER, TOKEN_POST } from '../../api';
import { UserContext } from '../../UserContext';

export default function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          name="username"
          type="text"
          {...username}
        ></Input>

        <Input
          label="Password"
          name="password"
          type="password"
          {...password}
        ></Input>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}

        {error && <p>{error}</p>}
      </form>
    </>
  );
}
