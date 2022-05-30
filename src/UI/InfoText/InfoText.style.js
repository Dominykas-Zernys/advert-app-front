import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const infoTextWrapper = styled.div`
  position: absolute;
  width: calc(100% - 6rem);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 425px) {
    width: calc(100% - 2rem);
  }
`;

export const infoTextPar = styled.p`
  margin: auto;
  color: ${({ color }) => color};

  & a {
    border-bottom: 1px solid ${pageColors.primary};

    &:hover {
      border-bottom: 2px solid ${pageColors.primary};
      font-weight: 900;
    }
  }
`;
