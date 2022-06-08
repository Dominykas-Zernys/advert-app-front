import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 425px) {
    display: none;
  }

  & button {
    align-self: center;
    border-radius: 2rem;
    margin: 0;
    padding: 0.85rem 1rem;
  }

  & a.nav-link {
    align-items: center;
    border-bottom-left-radius: 1.5rem;
    border-bottom: 2px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-top-left-radius: 1rem;
    color: ${pageColors.text};
    display: flex;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    padding: 0.5rem calc(1rem + 1px);
    position: relative;
    transition: all 0.5s;

    @media only screen and (max-width: 425px) {
      font-size: 1.5rem;
    }

    &:hover {
      border-left: 2px solid ${pageColors.primary};
      padding-left: 1rem;
      transition: all 0.1s;
    }
  }

  .active {
    border-bottom: 2px solid ${pageColors.primary};
    font-weight: 900;
    transition: border-bottom 0.5s;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 3rem;
  height: 4rem;
  left: -2rem;
  margin-right: auto;
  overflow: visible;
  position: relative;
  top: 3px;
  width: 14rem;

  @media only screen and (max-width: 425px) {
    height: 10rem;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    width: 25rem;
  }

  & a {
    height: 100%;
    width: 100%;
    padding: 0;
  }

  & img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;
