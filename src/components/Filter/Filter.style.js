import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const FilterWrap = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > p {
    margin-bottom: 0.5rem;
  }
`;

export const CategoriesWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    padding: 0.5rem;
    border-top: 2px solid ${pageColors.primary};
    border-top-right-radius: 1rem;
    border-bottom: 2px solid #ffffff;
  }
`;
