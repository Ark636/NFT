import React from 'react';
import {
    RoadmapSec,
    InfoRow,
    Column1,
    ImgWrapper,
    Img,
  } from './Carousel.elements';

import profile from "../../images/profile.jpg"
import profileCroc from "../../images/profile1.jpg"

import example1 from "../../images/example1.png"
import example2 from "../../images/example2.png"
import example3 from "../../images/example3.png"
import example4 from "../../images/example4.png"
import example5 from "../../images/example5.png"
import example6 from "../../images/example6.png"





function CarouselItem() {
    return (
        <>
        <RoadmapSec>

            <InfoRow>

              <Column1>
                <ImgWrapper>
                  <Img src={example1} />
                </ImgWrapper>
              </Column1>

              <Column1>
                <ImgWrapper>
                  <Img src={example2} />
                </ImgWrapper>
              </Column1>

              <Column1>
                <ImgWrapper>
                  <Img src={example3} />
                </ImgWrapper>
              </Column1>

              <Column1>
                <ImgWrapper>
                  <Img src={example4} />
                </ImgWrapper>
              </Column1>

              <Column1>
                <ImgWrapper>
                  <Img src={example5} />
                </ImgWrapper>
              </Column1>

              <Column1>
                <ImgWrapper>
                  <Img src={example6} />
                </ImgWrapper>
              </Column1>
              
            </InfoRow>

        </RoadmapSec>
      </>
    );
}

export default CarouselItem;