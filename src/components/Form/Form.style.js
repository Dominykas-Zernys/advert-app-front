import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Form = styled.form`
  display: grid;

  &.register {
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }

    & button {
      justify-self: center;
      grid-column: 1 / span 2;

      @media only screen and (max-width: 650px) {
        grid-column: 1 / span 1;
      }
    }
  }

  &.login {
    grid-template-columns: 1fr;
    width: 75%;
    margin: auto;

    & button {
      justify-self: center;
    }
  }

  &.advert {
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }

    & .textarea-wrapper {
      grid-column: 1 / span 2;

      @media only screen and (max-width: 650px) {
        grid-column: 1 / span 1;
      }
    }

    & button {
      justify-self: center;
      grid-column: 1 / span 2;

      @media only screen and (max-width: 650px) {
        grid-column: 1 / span 1;
      }
    }
  }

  & .loading-text {
    padding: 1rem;
    color: ${pageColors.hover};
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
