import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const PreviewWrapper = styled.div`
  padding: 0.5rem 1rem;
`;

export const StyleType = styled.h3`
  margin: auto;
  color: ${pageColors.primary};
`;

export const PreviewFlex = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  height: 280px;
`;

export const previewCaption = styled.h4`
  color: #979797;
  padding: 0.5rem 0;
`;
