import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const InputWrap = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 650px) {
    width: 90%;
    margin: auto;
    padding: 1rem 0;
  }

  & .hidden-label {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    height: 1.5rem;
  }
`;

export const ImgInput = styled.input`
  border: 1px solid ${pageColors.primary};
  padding: 0.5rem;
  border-radius: 1rem;
  font-family: inherit;
  cursor: pointer;
`;
