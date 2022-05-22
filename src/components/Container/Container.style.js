import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Container = styled.div`
  width: ${(props) => props.width};
  border-left: 2px solid ${pageColors.primary};
  border-right: 2px solid ${pageColors.primary};
  min-height: 20rem;
  margin: auto;
  border-radius: 3rem;
  padding: 3rem;
`;
