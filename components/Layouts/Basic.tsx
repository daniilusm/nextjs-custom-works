import Header from 'components/Header';
import styled from 'styled-components';

type Props = {
  children: any;
};

const Container = styled.div`
  margin: 0 auto;
  // max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
`;

const BasicLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default BasicLayout;
