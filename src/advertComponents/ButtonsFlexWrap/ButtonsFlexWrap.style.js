import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const ButtonsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media only screen and (max-width: 425px) {
    & > button {
      width: 45%;
      font-size: 1.25rem;
    }

    & > div.delete-confirm {
      flex-grow: 2;
      font-size: 1.25rem;

      & button {
        font-size: 1.25rem;
      }
    }
  }

  & .delete-confirm {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  & .error-text {
    color: ${pageColors.danger};
    position: absolute;
    right: 15%;
    top: 7rem;

    @media only screen and (max-width: 1692px) {
      right: 7.5%;
    }

    @media only screen and (max-width: 1408px) {
      right: 2.5%;
    }
  }
`;
