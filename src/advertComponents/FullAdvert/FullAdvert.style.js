import styled from 'styled-components';

export const AdWrapper = styled.div`
  min-height: 80vh;
  background-color: ${(props) => props.adStyle.colors.background};
  font-family: ${(props) => props.adStyle.font};

  & h1 {
    color: ${(props) => props.adStyle.colors.primary};
  }

  & h2 {
    color: ${(props) => props.adStyle.colors.secondary};
  }

  & img {
    width: 100px;
    height: 100px;
  }
`;
