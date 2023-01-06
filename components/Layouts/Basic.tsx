import Header from 'components/Header';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default BasicLayout;
