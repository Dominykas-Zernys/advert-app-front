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
      grid-column: 1 / span 2;
      justify-self: center;

      @media only screen and (max-width: 650px) {
        grid-column: 1 / span 1;
      }
    }
  }

  &.login {
    grid-template-columns: 1fr;
    margin: auto;
    width: 75%;

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
      grid-column: 1 / span 2;
      justify-self: center;

      @media only screen and (max-width: 650px) {
        grid-column: 1 / span 1;
      }
    }
  }

  & .loading-text {
    align-items: center;
    color: ${pageColors.hover};
    display: flex;
    font-weight: 900;
    justify-content: center;
    padding: 1rem;
  }
`;
