import Header from 'components/Header';
import styled from 'styled-components';

type Props = {
  children: any;
  title: string;
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

const BasicLayout = ({ children, title }: Props) => {
  return (
    <Container>
      <Header title={title} />
      {children}
    </Container>
  );
};

export default BasicLayout;
