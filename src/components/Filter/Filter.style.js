import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const FilterWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;

  & > p {
    margin-bottom: 0.5rem;
  }
`;

export const CategoriesWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;

  & > p {
    border-bottom: 2px solid #ffffff;
    border-top-right-radius: 1rem;
    border-top: 2px solid ${pageColors.primary};
    padding: 0.5rem;
  }

  @media only screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
`;
