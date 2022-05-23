import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const P = styled.p`
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => (props.center ? 'center' : 'justify')};
  text-indent: ${(props) => (props.textIndent ? '2rem' : '0')};
  margin: 2rem 1rem;
  line-height: 2rem;

  & a {
    border-bottom: 1px solid ${pageColors.primary};

    &:hover {
      border-bottom: 2px solid ${pageColors.primary};
      color: ${pageColors.primary};
      font-weight: 900;
    }
  }
`;
