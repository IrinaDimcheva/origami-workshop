import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import styles from './index.module.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = (event, type) => {
    // console.log(event.target);
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  }

  render() {
    const { email, password } = this.state;
    return (
      <PageLayout>
        <div className={styles.container}>
          <Title title="Login" />
          <Input
            value={email}
            onChange={(e) => this.onChange(e, 'email')}
            label="Email"
            id="email"
          />
          <Input
            value={password}
            onChange={(e) => this.onChange(e, 'password')}
            label="Password"
            id="password"
          />
          <SubmitButton title="Login" />
        </div>
      </PageLayout>
    );
  }
};

export default LoginPage;