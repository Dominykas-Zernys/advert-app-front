import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const H2 = styled.h2`
  color: ${pageColors.primary};
  font-size: 1.5rem;
  margin-block-end: 1em;
  margin-block-start: 1em;
  opacity: 0.85;
  ${(props) => props.noMargin && 'margin:0'}
`;
