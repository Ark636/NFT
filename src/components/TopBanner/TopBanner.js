import React from 'react';
import backGround from '../../images/Bg.jpg'
import { Button } from '../../globalStyles';
import {
  TopSec,
  ImgWrapper,
  InfoRow,
  TextWrapper, 
  Header,
  Subtext
  } from './TopBanner.elements';

  function TopBanner() {
    return (
      <>
        <TopSec>
            <InfoRow>
                <ImgWrapper>
                    <img src={backGround} alt="background"/>
                </ImgWrapper>
                <TextWrapper>
                    <Header>
                        Sloth Gamer Club
                    </Header>
                    <Subtext>
                        A collection of 10000 collectibles waiting to be minted and claimed by you; an exlusive ticket to enter the most diverse and rewarding gaming community.
                    </Subtext>
                    <Button>
                        Connect Your MetaMask Wallet
                    </Button>
                </TextWrapper>
            </InfoRow>
        </TopSec>
      </>
    );
  }
  
  export default TopBanner;