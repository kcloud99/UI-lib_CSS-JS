import styled from 'styled-components';

export const WrappedItem = styled.div`
  display: flex;
  width: 25vw;
  height: 30vh;
  margin: 8px;
  background-image: url(${props => props.photo});
  background-size: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35), 0 2px 4px rgba(0, 0, 0, 0.24);
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

  @media screen and (max-width: 767px) {width: 40%;}

  @media screen and (max-width: 479px) {width: 85%;}
`;

export const Cover = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Name = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

export const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: all 1s ease-in-out;

  ${Cover}:hover & {
    opacity: 1;
  }
`;

export const Btn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: white;
  opacity: 0;
  transition: all 1s ease-in-out;

  ${Cover}:hover & {
    opacity: 1;
  }
`;