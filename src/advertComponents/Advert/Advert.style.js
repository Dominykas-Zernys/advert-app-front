import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Ad = styled.div`
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  margin: 1rem;
  height: 16em;
  transition: all 0.5s ease-out;

  &:hover {
    font-size: 18px;
    width: 112.5%;
    transition: all 0.25s ease-out;
    margin: -0.25rem 1rem;
    transition-delay: 0.15s;

    & .short-description {
      opacity: 1;
      transition-delay: 0.15s;
      transition: opacity 0.65s ease-in-out;
    }

    & .contacts {
      opacity: 1;
      transition-delay: 0.15s;
      transition: opacity 0.65s ease-in-out;
    }
  }
`;

export const WrapperLink = styled(Link)`
  width: 100%;
  background-color: ${(props) => props.adstyle.colors.background};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;

  & .title {
    background-color: ${(props) => props.adstyle.colors.secondary};
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  & .content {
    flex-grow: 1;
    position: relative;
  }

  & .short-description {
    padding: 1rem;
    opacity: 1;
    background-image: url(${(props) => props.imagesrc});
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  & .contacts {
    position: absolute;
    top: 0;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease-out;
  }

  & .contact {
    background-color: ${(props) => props.adstyle.colors.primary};
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    z-index: 999;
  }
`;
