import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Container = styled.div`
  border-left: 2px solid ${pageColors.primary};
  border-radius: 3rem;
  border-right: 2px solid ${pageColors.primary};
  box-sizing: border-box;
  margin: auto;
  min-height: ${(props) => props.minHeight};
  padding: 3rem;
  position: relative;
  width: ${(props) => props.width};

  @media only screen and (max-width: 425px) {
    padding: 1rem;
  }

  & .error-wrapper {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
