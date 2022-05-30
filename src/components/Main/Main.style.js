import styled from 'styled-components';

export const Main = styled.main`
  padding: 3.5rem 0;
  min-height: 80vh;

  @media only screen and (max-width: 1024px) {
    min-height: 20vh;
  }

  @media only screen and (max-width: 425px) {
    padding: 1rem 0;
  }
`;
