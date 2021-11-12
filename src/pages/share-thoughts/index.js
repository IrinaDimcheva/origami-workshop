import React, { useState } from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';
import getCookie from '../../utils/cookie';
import styled from 'styled-components';
// import getOrigami from '../../utils/origami';

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState('');
  const [updatedOrigami, setUpdatedOrigami] = useState([]);

  const handleSubmit = async () => {
    await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
      }
    });

    setPublication('');
    // const origamis = await getOrigami(3);
    // setUpdatedOrigami(origamis);
    setUpdatedOrigami([...updatedOrigami, 1]);
  }

  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>
        <Textarea
          value={publication}
          placeholder="Publication..."
          onChange={e => setPublication(e.target.value)}
        />
        <SubmitButton title='Post' onClick={handleSubmit} />
      </Container>
      <Origamis length={3} updatedOrigami={updatedOrigami} />
    </PageLayout>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Textarea = styled.textarea`
  width: 40%;
  height: 10vh;
  resize: none;
  display: block;
  margin: 0 auto;
  padding: 2%;
  font-style: italic;
  border-radius: 6px;
  border: 1px solid #234465;
  color: #234465;
`;

export default ShareThoughtsPage;