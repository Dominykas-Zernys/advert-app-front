import styled from 'styled-components';

export const AdWrapper = styled.div`
  background: ${(props) => props.adStyle.background.background};
  border-radius: ${(props) => props.adStyle.background.borderRadius};
  border: ${(props) => props.adStyle.background.border};
  box-shadow: ${(props) => props.adStyle.background.shadow};
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.adStyle.font};
  min-height: 40vw;

  & .container {
    border-radius: ${(props) => props.adStyle.containers.borderRadius};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem 1rem;

  @media only screen and (max-width: 650px) {
    padding-top: 1rem;
  }
`;

export const Title = styled.h1`
  background: ${(props) => props.adStyle.title.background};
  border-bottom: ${(props) => props.adStyle.title.borderBottom};
  border-left: ${(props) => props.adStyle.title.borderLeft};
  border-right: ${(props) => props.adStyle.title.borderRight};
  border-top: ${(props) => props.adStyle.title.borderTop};
  border: ${(props) => props.adStyle.title.border};
  box-shadow: ${(props) => props.adStyle.title.shadow};
  color: ${(props) => props.adStyle.title.color};
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 100;
  overflow: hidden;
  padding: 0.25rem 4rem;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (max-width: 650px) {
    white-space: normal;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  padding: 1rem;

  @media only screen and (max-width: 700px) {
    gap: 2rem;
  }

  @media only screen and (max-width: 650px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
`;

export const Contact = styled.h2`
  background: ${(props) => props.adStyle.containers.secondary.background};
  border-bottom: ${(props) => props.adStyle.containers.secondary.borderBottom};
  border-left: ${(props) => props.adStyle.containers.secondary.borderLeft};
  border-right: ${(props) => props.adStyle.containers.secondary.borderRight};
  border-top: ${(props) => props.adStyle.containers.secondary.borderTop};
  border: ${(props) => props.adStyle.containers.secondary.border};
  box-shadow: ${(props) => props.adStyle.containers.secondary.shadow};
  color: ${(props) => props.adStyle.containers.secondary.textColor};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 100;
  min-width: 20rem;
  overflow: hidden;
  padding: 1rem;
  transition: font-size 0.5s, padding 0.5s;
  white-space: nowrap;

  @media only screen and (max-width: 650px) {
    max-width: 80%;
  }

  &:hover {
    font-size: 1.32rem;
    transition: font-size 0.5s;
  }
`;

export const ContentWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-grow: 2;
  gap: 3rem;
  justify-content: center;
  padding: 2rem;

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export const Description = styled.p`
  background-color: ${(props) => props.adStyle.containers.primary.background};
  border-bottom: ${(props) => props.adStyle.containers.primary.borderBottom};
  border-left: ${(props) => props.adStyle.containers.primary.borderLeft};
  border-right: ${(props) => props.adStyle.containers.primary.borderRight};
  border-top: ${(props) => props.adStyle.containers.primary.borderTop};
  border: ${(props) => props.adStyle.containers.primary.border};
  box-shadow: ${(props) => props.adStyle.containers.primary.shadow};
  color: ${(props) => props.adStyle.containers.primary.textColor};
  font-size: 1.2rem;
  padding: 1rem;
  text-align: left;
  text-indent: 2rem;
  width: 25rem;
  word-break: break-word;

  @media only screen and (max-width: 700px) {
    margin: auto;
    width: 90%;
  }
`;

export const Img = styled.div`
  background-image: url(${(props) => props.imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: ${(props) => props.adStyle.containers.primary.borderBottom};
  border-left: ${(props) => props.adStyle.containers.primary.borderLeft};
  border-right: ${(props) => props.adStyle.containers.primary.borderRight};
  border-top: ${(props) => props.adStyle.containers.primary.borderTop};
  border: ${(props) => props.adStyle.containers.primary.border};
  box-shadow: ${(props) => props.adStyle.containers.primary.shadow};
  width: 40rem;

  @media only screen and (max-width: 1500px) {
    min-height: 30vw;
  }

  @media only screen and (max-width: 700px) {
    margin: auto;
    min-height: 50vw;
    width: 100%;
  }
`;
