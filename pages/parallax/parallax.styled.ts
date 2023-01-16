import styled from 'styled-components';

export const Root = styled.div<{ bcg: any }>`
  background-image: ${({ bcg }) => bcg && `url(${bcg.src})`};
`;

export const Block = styled.div`
  width: 100vw;
  height: 100vw;
`;
