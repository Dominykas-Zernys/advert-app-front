import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }

  & button {
    border-radius: 2rem;
    padding: 0.85rem 1rem;
    margin: 0;
    align-self: center;
  }

  & a {
    font-size: 1.1rem;
    color: ${pageColors.text};
    padding: 0.5rem calc(1rem + 1px);
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1.5rem;
    position: relative;
    border-bottom: 2px solid #ffffff;
    border-left: 1px solid #ffffff;
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
    transition: border-bottom 0.5s;
    font-weight: 900;
  }
`;

export const ImgWrapper = styled.div`
  margin-right: auto;
  height: 4rem;
  width: 14rem;
  position: relative;
  left: -2rem;
  top: 3px;
  border-radius: 3rem;
  overflow: hidden;

  @media only screen and (max-width: 425px) {
    height: 10rem;
    width: 25rem;
    left: 50%;
    transform: translate(-50%);
    top: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
