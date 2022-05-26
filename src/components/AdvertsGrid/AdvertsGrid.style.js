import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
`;

export const NumbersWrapper = styled.form`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;

  & input {
    display: none;
  }

  & label {
    padding: 0.5rem 1rem;
    border-top: 2px solid ${pageColors.primary};
    border-left: 2px solid ${pageColors.primary};
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.5s;
    border-radius: 2rem;
    border-bottom: 0px;
    border-right: 0px;
  }

  & label:hover {
    border-right: 2px solid ${pageColors.primary};
    border-bottom: 2px solid ${pageColors.primary};
    margin-right: -2px;
    background-color: ${pageColors.hover};
  }

  & input:checked ~ label {
    border-right: 2px solid ${pageColors.primary};
    border-bottom: 2px solid ${pageColors.primary};
    margin-right: -2px;
  }
`;
