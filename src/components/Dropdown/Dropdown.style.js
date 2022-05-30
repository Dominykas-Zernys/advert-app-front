import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  @media only screen and (max-width: 650px) {
    margin: auto;
    padding: 1rem 0;
    width: 90%;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Dropdown = styled.select`
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};
  font-family: inherit;
  padding: 0.5rem 0.75rem;

  &:focus {
    outline: none;
  }
`;
