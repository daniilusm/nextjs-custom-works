import BasicLayout from 'components/layout/basic';
import styled from 'styled-components';
import Head from '../node_modules/next/head';

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <BasicLayout>
        <p>hello</p>
        <Title>Title</Title>
      </BasicLayout>
    </>
  );
};

export default Home;
