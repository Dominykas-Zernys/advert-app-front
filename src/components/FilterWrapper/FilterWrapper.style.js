import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }

  & > div:last-child {
    width: 25%;

    @media only screen and (max-width: 580px) {
      width: 50%;
    }

    @media only screen and (max-width: 425px) {
      width: 80%;
    }
  }
`;
