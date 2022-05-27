import styled from 'styled-components';

export const AdWrapper = styled.div`
  min-height: 40vw;
  background-color: ${(props) => props.adStyle.colors.background};
  font-family: ${(props) => props.adStyle.font};
  display: flex;
  flex-direction: column;

  & .container {
    border-radius: 2rem;
  }
`;

export const TitleWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  background-color: ${(props) => props.adStyle.colors.secondaryBcg};
  border: ${(props) => props.adStyle.border};
  box-shadow: ${(props) => props.adStyle.boxShadowSecondary};
  font-size: 4rem;
  padding: 1rem 4rem;
  font-size: 4rem;
  display: inline-block;
`;
export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 5rem;
`;

export const Contact = styled.h2`
  padding: 1rem;
  background-color: ${(props) => props.adStyle.colors.tertiaryBcg};
  box-shadow: ${(props) => props.adStyle.boxShadowTertiary};
  border: ${(props) => props.adStyle.borderSecondary};
  width: 20rem;
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
  flex-grow: 2;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 3rem;
`;

export const Description = styled.p`
  background-color: ${(props) => props.adStyle.colors.secondaryBcg};
  box-shadow: ${(props) => props.adStyle.boxShadowSecondary};
  border: ${(props) => props.adStyle.border};
  text-align: justify;
  text-indent: 2rem;
  width: 25rem;
  padding: 1rem;
  font-size: 1.2rem;
`;

export const Img = styled.div`
  box-shadow: ${(props) => props.adStyle.boxShadowSecondary};
  border: ${(props) => props.adStyle.border};
  width: 40rem;
  background-image: url(${(props) => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
`;
