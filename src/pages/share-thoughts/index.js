import React from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';
import styled from 'styled-components';

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>
        <Textarea defaultValue="Publication..." />
        <SubmitButton title='Post' />
      </Container>
      <Origamis length={3} />
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