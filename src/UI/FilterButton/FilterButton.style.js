import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const RadioInput = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  border-bottom-left-radius: 1rem;
  border-bottom: 2px solid #ffffff;
  border-top-right-radius: 1rem;
  border-top: 2px solid ${pageColors.primary};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  min-width: 2rem;
  padding: 0.5rem;
  text-align: center;
  transition: background-color 0.5s;
  transition: color 0.5s, background-color 0.5s;

  &:hover {
    background-color: ${pageColors.hover};
    border-bottom: 2px solid ${pageColors.primary};
    transition: all 0.5s;
  }
`;

export const FilterBtn = styled.li`
  list-style: none;

  & input:checked ~ label {
    border-bottom: 2px solid ${pageColors.primary};
    color: ${pageColors.text};
    font-weight: 900;
    transition: background-color 0.5s;
    transition: box-shadow 0.5s;
  }
`;
