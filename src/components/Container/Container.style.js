import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Container = styled.div`
  width: ${(props) => props.width};
  border-left: 2px solid ${pageColors.primary};
  border-right: 2px solid ${pageColors.primary};
  min-height: 16rem;
  margin: auto;
  border-radius: 3rem;
  padding: 3rem;
  position: relative;
  box-sizing: border-box;

  & .error-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
