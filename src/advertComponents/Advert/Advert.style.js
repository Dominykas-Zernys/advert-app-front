import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Ad = styled.div`
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  background-color: red;
  margin: 1rem;
  height: 16em;
  transition: all 0.5s ease-out;

  &:hover {
    font-size: 18px;
    width: 112.5%;
    transition: all 0.25s ease-out;
    margin: 0 1rem;
    transition-delay: 0.15s;
  }
`;

export const WrapperLink = styled(Link)`
  width: 100%;
  background-color: blue;
  height: 100%;
  display: inline-block;
  padding: 2rem;
  box-sizing: border-box;
`;
