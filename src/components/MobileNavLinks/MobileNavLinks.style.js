import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Nav = styled.nav`
  display: none;

  @media only screen and (max-width: 425px) {
    display: flex;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 3rem;
  height: 4rem;
  overflow: visible;
  width: 14rem;
  display: block;

  & img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  background-color: #ffffff;
  z-index: 999;
  width: 95%;
  border: 1px solid ${pageColors.primary};
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;

  & a.nav-link {
    border-top: 1px solid ${pageColors.hover};
    background-color: #ffffff;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
  }

  & a.nav-link.active {
    background-color: ${pageColors.hover};
  }

  & button {
    margin: 0;
  }
`;

export const FlexNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
