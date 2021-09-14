import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const postFetch = async (url) => {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log(result);
      const jsonResponse = await result.json();
      console.log(jsonResponse);
    };

    postFetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          name="username"
          type="text"
          value={username}
          setValue={setUsername}
        ></Input>

        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          setValue={setPassword}
        ></Input>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
