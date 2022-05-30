import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Ad = styled.div`
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  margin: 1rem;
  height: 20em;
  transition: all 0.5s ease-out;
  color: ${(props) => props.adstyle.banner.textColor};
  font-family: ${(props) => props.adstyle.font};

  @media only screen and (max-width: 700px) {
    margin: 0.25rem;
  }

  @media only screen and (max-width: 425px) {
    margin: 0.75rem;
  }

  &:hover {
    font-size: 1.125rem;
    width: 112.5%;
    transition: all 0.25s ease-out;
    margin: -0.25rem 1rem;
    transition-delay: 0.15s;

    @media only screen and (max-width: 700px) {
      margin: -1rem 0.25rem;
    }

    @media only screen and (max-width: 425px) {
      margin: -0.5rem 0.25rem;
    }

    & .short-description {
      opacity: 0.95;
      transition-delay: 0.15s;
      transition: opacity 0.5s ease-out;
    }

    & .contacts {
      opacity: 1;
      transition-delay: 0.15s;
      transition: opacity 0.5s;
      z-index: 10000;
    }

    & .title-header {
      opacity: 0;
      transition: opacity 0.65s;
    }
  }
`;

export const WrapperLink = styled(Link)`
  width: 100%;
  background-color: ${(props) => props.adstyle.banner.primary};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  font-family: ${(props) => props.adstyle.font};

  & .title {
    padding: 0.25rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    position: relative;

    & .title-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0.25rem;
      right: 0.25rem;
      padding: 0.25rem;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.adstyle.banner.secondary};
      border: ${(props) => props.adstyle.banner.border};
      border-radius: ${(props) => props.adstyle.containers.borderRadius};
      font-size: inherit;
      transition: opacity 0.65s;
    }
  }

  & .content {
    flex-grow: 1;
    position: relative;
    background-image: url(${(props) => props.imagesrc});
    background-position: center;
    background-size: cover;
  }

  & .short-description {
    box-sizing: border-box;
    padding: 1rem;
    opacity: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.adstyle.banner.secondary};
    border: ${(props) => props.adstyle.banner.border};
    transition-delay: 0.15s;
    transition: opacity 0.65s ease-in-out;
    word-break: break-word;
  }

  & .contacts {
    position: absolute;
    top: 0;
    right: 0;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition-delay: 0.15s;
    transition: opacity 0.65s ease-in-out;
    gap: 0.5rem;
    letter-spacing: 0rem;
    width: 100%;
  }

  & .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.adstyle.banner.secondary};
    border: ${(props) => props.adstyle.banner.border};
    padding: 0.25rem;
    font-size: 0.9rem;
    border-radius: ${(props) => props.adstyle.containers.borderRadius};
    flex-grow: 1;
    overflow: hidden;
  }
  & .copied-text {
    z-index: 999;
    position: absolute;
    top: -1.5rem;
    padding: 0.25rem;
    border-radius: 3rem;
    font-size: 1rem;

    &.phone-copied {
      position: absolute;
      left: 0.25rem;
    }
    &.email-copied {
      position: absolute;
      right: 0.25rem;
    }
  }
`;
