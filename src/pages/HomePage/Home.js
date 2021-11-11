import React from 'react';
import { homeObjOne, homeObjTwo, homeObjFour } from './Data';
import { CarouselItem, InfoSection, TopBanner, Roadmap } from '../../components';

function Home() {
  return (
    <>
      <TopBanner/>
      <InfoSection {...homeObjOne} />
      <CarouselItem/>
      <Roadmap {...homeObjTwo}/>
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
