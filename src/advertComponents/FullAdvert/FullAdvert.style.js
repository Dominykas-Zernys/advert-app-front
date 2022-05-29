import styled from 'styled-components';

export const AdWrapper = styled.div`
  min-height: 40vw;
  font-family: ${(props) => props.adStyle.font};
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.adStyle.background.borderRadius};
  border: ${(props) => props.adStyle.background.border};
  background: ${(props) => props.adStyle.background.background};
  box-shadow: ${(props) => props.adStyle.background.shadow};

  & .container {
    border-radius: ${(props) => props.adStyle.containers.borderRadius};
  }
`;

export const TitleWrapper = styled.div`
  padding: 4rem 1rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  background: ${(props) => props.adStyle.title.background};
  color: ${(props) => props.adStyle.title.color};
  box-shadow: ${(props) => props.adStyle.title.shadow};
  font-weight: 100;
  padding: 0.25rem 4rem;
  font-size: 2.5rem;
  display: inline-block;
  border: ${(props) => props.adStyle.title.border};
  border-top: ${(props) => props.adStyle.title.borderTop};
  border-right: ${(props) => props.adStyle.title.borderRight};
  border-left: ${(props) => props.adStyle.title.borderLeft};
  border-bottom: ${(props) => props.adStyle.title.borderBottom};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 5rem;
`;

export const Contact = styled.h2`
  padding: 1rem;
  background: ${(props) => props.adStyle.containers.secondary.background};
  box-shadow: ${(props) => props.adStyle.containers.secondary.shadow};
  border: ${(props) => props.adStyle.containers.secondary.border};
  min-width: 20rem;
  font-weight: 100;
  transition: font-size 0.5s, padding 0.5s;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${(props) => props.adStyle.containers.secondary.textColor};
  border-top: ${(props) => props.adStyle.containers.secondary.borderTop};
  border-right: ${(props) => props.adStyle.containers.secondary.borderRight};
  border-left: ${(props) => props.adStyle.containers.secondary.borderLeft};
  border-bottom: ${(props) => props.adStyle.containers.secondary.borderBottom};

  &:hover {
    font-size: 1.32rem;
    transition: font-size 0.5s;
  }
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
  background-color: ${(props) => props.adStyle.containers.primary.background};
  box-shadow: ${(props) => props.adStyle.containers.primary.shadow};
  border: ${(props) => props.adStyle.containers.primary.border};
  text-align: left;
  text-indent: 2rem;
  width: 25rem;
  padding: 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.adStyle.containers.primary.textColor};
  border-top: ${(props) => props.adStyle.containers.primary.borderTop};
  border-right: ${(props) => props.adStyle.containers.primary.borderRight};
  border-left: ${(props) => props.adStyle.containers.primary.borderLeft};
  border-bottom: ${(props) => props.adStyle.containers.primary.borderBottom};
  word-break: break-word;
`;

export const Img = styled.div`
  box-shadow: ${(props) => props.adStyle.containers.primary.shadow};
  border: ${(props) => props.adStyle.containers.primary.border};
  width: 40rem;
  background-image: url(${(props) => props.imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: ${(props) => props.adStyle.containers.primary.borderTop};
  border-right: ${(props) => props.adStyle.containers.primary.borderRight};
  border-left: ${(props) => props.adStyle.containers.primary.borderLeft};
  border-bottom: ${(props) => props.adStyle.containers.primary.borderBottom};
`;
