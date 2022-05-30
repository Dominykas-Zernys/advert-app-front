import styled from 'styled-components';

export const Main = styled.main`
  min-height: 80vh;
  padding: 3.5rem 0;

  @media only screen and (max-width: 1024px) {
    min-height: 20vh;
  }

  @media only screen and (max-width: 425px) {
    padding: 1rem 0;
  }
`;
