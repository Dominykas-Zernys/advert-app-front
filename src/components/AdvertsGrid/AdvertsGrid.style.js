import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Grid = styled.div`
  align-items: center;
  column-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

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
  gap: 1rem;
  padding: 0.5rem;

  @media only screen and (max-width: 425px) {
    flex-wrap: wrap;
  }

  & input {
    display: none;
  }

  & label {
    border-bottom: 0px;
    border-left: 2px solid ${pageColors.primary};
    border-radius: 2rem;
    border-right: 0px;
    border-top: 2px solid ${pageColors.primary};
    cursor: pointer;
    display: inline-block;
    padding: 0.5rem 1rem;
    transition: background-color 0.5s;
  }

  & label:hover {
    background-color: ${pageColors.hover};
    border-bottom: 2px solid ${pageColors.primary};
    border-right: 2px solid ${pageColors.primary};
    margin-right: -2px;
  }

  & input:checked ~ label {
    border-bottom: 2px solid ${pageColors.primary};
    border-right: 2px solid ${pageColors.primary};
    font-weight: 900;
    margin-right: -2px;
  }
`;
