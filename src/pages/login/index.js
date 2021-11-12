import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import styles from './index.module.css';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await authenticate('http://localhost:9999/api/user/login', {
      username,
      password
    }, (user) => {
      context.logIn(user);
      history.push('/');
    }, (err) => {
      console.log('Error', err);
    });
  }

  return (
    <PageLayout>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title title="Login" />
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          label="Username"
          id={username}
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          label='Password'
          id={password}
        />
        <SubmitButton title="Login" />
      </form>
    </PageLayout>
  );
}

export default LoginPage;