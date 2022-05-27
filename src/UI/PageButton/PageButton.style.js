import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const PageBtn = styled.button`
  font-size: 1rem;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: none;
  background-color: ${pageColors.primary};
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    background-color: ${pageColors.buttonHover};
  }

  &:active {
    transition: all 0.3s;
    background-color: ${pageColors.buttonHover};
    opacity: 0.8;
  }
`;
