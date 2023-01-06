import Header from 'components/Header';
import { GlobalStyle } from 'styles/global';

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
