import styled from 'styled-components';

export const RoadmapSec = styled.div`
  color: #fff;
  padding: 10px 0;
  background: #101522;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const Column1 = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  flex: 1;
  max-width: 16.66%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  padding: 5px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    outline: 2px solid #fff;
`;

export const Img = styled.img`
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;