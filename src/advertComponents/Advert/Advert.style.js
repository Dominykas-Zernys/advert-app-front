import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const Ad = styled.div`
  border-radius: 2rem;
  color: ${(props) => props.adstyle.banner.textColor};
  font-family: ${(props) => props.adstyle.font};
  height: 20em;
  margin: 1rem;
  overflow: hidden;
  transition: all 0.5s ease-out;
  width: 100%;

  @media only screen and (max-width: 700px) {
    margin: 0.25rem;
  }

  @media only screen and (max-width: 425px) {
    margin: 0.75rem;
  }

  &:hover {
    font-size: 1.125rem;
    margin: -0.25rem 1rem;
    transition-delay: 0.15s;
    transition: all 0.25s ease-out;
    width: 112.5%;

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
  background-color: ${(props) => props.adstyle.banner.primary};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.adstyle.font};
  height: 100%;
  padding: 2rem;
  width: 100%;

  & .title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding: 0.25rem;
    position: relative;

    & .title-header {
      align-items: center;
      background-color: ${(props) => props.adstyle.banner.secondary};
      border-radius: ${(props) => props.adstyle.containers.borderRadius};
      border: ${(props) => props.adstyle.banner.border};
      bottom: 0.25rem;
      display: flex;
      font-size: inherit;
      height: 100%;
      justify-content: center;
      padding: 0.25rem;
      position: relative;
      right: 0.25rem;
      transition: opacity 0.65s;
      width: 100%;
    }
  }

  & .content {
    background-image: url(${(props) => props.imagesrc});
    background-position: center;
    background-size: cover;
    flex-grow: 1;
    position: relative;
  }

  & .short-description {
    background-color: ${(props) => props.adstyle.banner.secondary};
    border: ${(props) => props.adstyle.banner.border};
    box-sizing: border-box;
    height: 100%;
    opacity: 0;
    padding: 1rem;
    transition-delay: 0.15s;
    transition: opacity 0.65s ease-in-out;
    width: 100%;
    word-break: break-word;
  }

  & .contacts {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 100%;
    justify-content: space-around;
    letter-spacing: 0rem;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition-delay: 0.15s;
    transition: opacity 0.65s ease-in-out;
    width: 100%;
    width: 100%;
  }

  & .contact {
    align-items: center;
    background-color: ${(props) => props.adstyle.banner.secondary};
    border-radius: ${(props) => props.adstyle.containers.borderRadius};
    border: ${(props) => props.adstyle.banner.border};
    display: flex;
    flex-grow: 1;
    font-size: 0.9rem;
    justify-content: center;
    overflow: hidden;
    padding: 0.25rem;
  }

  & .copied-text {
    border-radius: 3rem;
    font-size: 1rem;
    padding: 0.25rem;
    position: absolute;
    top: -1.5rem;
    z-index: 999;

    &.phone-copied {
      left: 0.25rem;
      position: absolute;
    }
    &.email-copied {
      position: absolute;
      right: 0.25rem;
    }
  }
`;
