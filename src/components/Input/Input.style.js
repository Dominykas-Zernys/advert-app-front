import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const InputWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};

  &:focus {
    outline: none;
  }
`;
