import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const RadioInput = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  padding: 0.5rem;
  min-width: 2rem;
  cursor: pointer;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-top: 2px solid ${pageColors.primary};
  border-bottom: 2px solid #ffffff;
  text-align: center;
  transition: color 0.5s, background-color 0.5s;
  transition: background-color 0.5s;

  &:hover {
    border-bottom: 2px solid ${pageColors.primary};
    background-color: ${pageColors.hover};
    transition: all 0.5s;
  }
`;

export const FilterBtn = styled.li`
  list-style: none;

  & input:checked ~ label {
    transition: box-shadow 0.5s;
    font-weight: 900;
    color: ${pageColors.text};
    border-bottom: 2px solid ${pageColors.primary};
    transition: background-color 0.5s;
  }
`;
