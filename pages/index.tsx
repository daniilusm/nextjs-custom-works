import BasicLayout from 'components/Layouts/Basic';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Title MF</title>
      </Head>
      <BasicLayout>
        <p>hello</p>
        <Title>Title</Title>
      </BasicLayout>
    </>
  );
};

export default Home;
