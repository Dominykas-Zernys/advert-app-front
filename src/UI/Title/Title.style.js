import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.125rem;
  margin: 0 auto ${(props) => ' ' + props.marginBottom};
  width: fit-content;
`;
