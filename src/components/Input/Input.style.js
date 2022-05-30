import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  position: relative;

  @media only screen and (max-width: 650px) {
    margin: auto;
    padding: 1rem 0;
    width: 90%;
  }

  & .plus {
    bottom: 1.5rem;
    left: 1.725rem;
    position: absolute;
    width: min-content;

    @media only screen and (max-width: 650px) {
      bottom: 1.6rem;
      left: 0.75rem;
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;

  & .blue-text {
    color: ${pageColors.text};
    font-weight: 900;
  }
`;

export const Input = styled.input`
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};
  font-family: inherit;
  padding: 0.5rem 0.75rem;

  &.phone {
    padding-left: 1.5rem;
  }

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};
  font-family: inherit;
  min-height: ${(props) => props.height};
  padding: 0.5rem 0.75rem;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

export const TextAreaCount = styled.div`
  bottom: 1.5rem;
  color: ${pageColors.text};
  font-size: 0.9rem;
  position: absolute;
  right: 2rem;

  & span {
    font-weight: 900;
  }

  & span.current-count {
    color: ${(props) => (props.inputLength < 10 || props.inputLength > props.maxLength ? pageColors.danger : 'inherit')};
  }
`;
