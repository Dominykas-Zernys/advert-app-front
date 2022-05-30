import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Container = styled.div`
  width: ${(props) => props.width};
  border-left: 2px solid ${pageColors.primary};
  border-right: 2px solid ${pageColors.primary};
  min-height: ${(props) => props.minHeight};
  margin: auto;
  border-radius: 3rem;
  padding: 3rem;
  position: relative;
  box-sizing: border-box;

  @media only screen and (max-width: 425px) {
    padding: 1rem;
  }

  & .error-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
