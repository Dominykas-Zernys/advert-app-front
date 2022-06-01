import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const PageBtn = styled.button`
  background-color: ${pageColors.primary};
  border-radius: 1rem;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  transition: all 0.3s;

  &.small-button {
    padding: 0.5rem;
  }

  &.delete-btn {
    padding: 0.5rem;
    background-color: ${pageColors.danger};

    &:hover {
      background-color: ${pageColors.danger};
      opacity: 0.7;
    }
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.5rem;
    top: 100%;
    width: 100%;
  }

  &:hover {
    background-color: ${pageColors.buttonHover};
    transition: all 0.3s;
  }

  &:active {
    background-color: ${pageColors.buttonHover};
    opacity: 0.8;
    transition: all 0.3s;
  }
`;
