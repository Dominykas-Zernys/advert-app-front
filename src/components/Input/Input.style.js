import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const InputWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;

  & .blue-text {
    font-weight: 900;
    color: ${pageColors.text};
  }
`;

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};
  resize: vertical;
  min-height: ${(props) => props.height};
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;
