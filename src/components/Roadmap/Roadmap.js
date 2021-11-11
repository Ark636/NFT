import React from 'react';
import {
    RoadmapSec,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    ImgWrapper,
    Img,
    TopLine,
    Heading,
    Subtitle
  } from './Roadmap.elements';
  
  function Roadmap({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
  }) {
    return (
      <>
        <RoadmapSec lightBg={lightBg}>

            <InfoRow imgStart={imgStart}>
              <Column2>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </Column2>
              <Column1>
                <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>

            <InfoRow imgStart={imgStart}>
              <Column2>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </Column2>
              <Column1>
                <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>

            <InfoRow imgStart={imgStart}>
              <Column2>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </Column2>
              <Column1>
                <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>

            <InfoRow imgStart={imgStart}>
              <Column2>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </Column2>
              <Column1>
                <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>

        </RoadmapSec>
      </>
    );
  }
  
  export default Roadmap;