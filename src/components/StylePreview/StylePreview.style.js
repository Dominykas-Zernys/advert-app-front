import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const PreviewWrapper = styled.div`
  padding: 0.5rem 1rem;

  @media only screen and (max-width: 650px) {
    padding-top: 2rem;
  }
`;

export const StyleType = styled.h3`
  margin: auto;
  color: ${pageColors.primary};
`;

export const PreviewFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;

  @media only screen and (max-width: 650px) {
    flex-direction: column;

    & > div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Img = styled.img`
  height: 16rem;

  @media only screen and (max-width: 650px) {
    height: 24rem;
  }

  @media only screen and (max-width: 650px) {
    height: 14rem;
  }
`;

export const PreviewCaption = styled.h4`
  color: #979797;
  padding: 0.5rem 0;
`;
