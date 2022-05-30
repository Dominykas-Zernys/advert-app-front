import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1rem;

  @media only screen and (max-width: 650px) {
    margin: auto;
    padding: 1rem 0;
    width: 90%;
  }

  & .hidden-label {
    border: 1px solid #ccc;
    cursor: pointer;
    display: inline-block;
    height: 1.5rem;
    padding: 6px 12px;
  }
`;

export const ImgInput = styled.input`
  border-radius: 1rem;
  border: 1px solid ${pageColors.primary};
  cursor: pointer;
  font-family: inherit;
  padding: 0.5rem;
`;
