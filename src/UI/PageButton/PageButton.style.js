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

  &.back-to-home {
    position: absolute;
    padding: 0.5rem;
    top: 4rem;

    @media only screen and (max-width: 425px) {
      top: 7rem;
      width: 80%;
      left: 10%;
    }
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.5rem;
    top: 0;
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
