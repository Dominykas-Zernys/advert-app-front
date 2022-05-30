import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 2rem;

  @media only screen and (max-width: 700px) {
    column-gap: 0.5rem;
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    margin: 0 1.5rem;
  }
`;

export const NumbersWrapper = styled.form`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;

  @media only screen and (max-width: 425px) {
    flex-wrap: wrap;
  }

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
    font-weight: 900;
  }
`;
