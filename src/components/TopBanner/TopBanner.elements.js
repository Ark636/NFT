import styled from 'styled-components';

export const TopSec = styled.div`
  color: #E31F44;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  position: relative;
`;

export const InfoColumn = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 11%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 30%;
  height: 30%;
  text-align: center;
  border-radius: 25px;

  &:hover {
  background-color: rgba(0, 0, 0, 0.8);
  outline: 2px solid #4b59f7;
  }
`;

export const Header = styled.div`
  color: #fff;
  font-size: 200%;
  position: relative;
  text-align: center;
  padding-top: 4%;
  padding-bottom: 5%;
`;

export const Subtext = styled.div`
  color: #fff;
  font-size: 100%;
  position: relative;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
`;

export const ImgWrapper = styled.div`
  object-fit: cover;
  max-width: 100%;
  max-height: 60em; 
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

