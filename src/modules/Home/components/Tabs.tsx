import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { media } from '@utils/mixins';
import { colors } from '@constants/theme';
import Image from '@components/Image';
import image0Src from '@assets/images/home/disinfection.png';
import image0SrcWebp from '@assets/images/home/disinfection.webp';
import image1Src from '@assets/images/home/room.jpg';
import image1SrcWebp from '@assets/images/home/room.webp';
import image2Src from '@assets/images/home/kitchen.jpg';
import image2SrcWebp from '@assets/images/home/kitchen.webp';
import image3Src from '@assets/images/home/hall.jpg';
import image3SrcWebp from '@assets/images/home/hall.webp';
import image4Src from '@assets/images/home/bathroom.jpg';
import image4SrcWebp from '@assets/images/home/bathroom.webp';
import bottomImageWebp from '@assets/images/home/bottom.webp';
import bottomImage from '@assets/images/home/bottom.png';

function Tabs() {
  const [activeTab, setActiveTab] = useState('0');

  return (
    <TabsContainer>
      <TabsControl>
        <TabsControlItem>
          <TabsControlButton
            type={'button'}
            className={activeTab === '0' ? 'active' : ''}
            onClick={() => setActiveTab('0')}
          >
            Disinfection
          </TabsControlButton>
        </TabsControlItem>

        <TabsControlItem>
          <TabsControlButton
            type={'button'}
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => setActiveTab('1')}
          >
            The Rooms
          </TabsControlButton>
        </TabsControlItem>

        <TabsControlItem>
          <TabsControlButton
            type={'button'}
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => setActiveTab('2')}
          >
            Kitchen
          </TabsControlButton>
        </TabsControlItem>

        <TabsControlItem>
          <TabsControlButton
            type={'button'}
            className={activeTab === '3' ? 'active' : ''}
            onClick={() => setActiveTab('3')}
          >
            Corridor
          </TabsControlButton>
        </TabsControlItem>

        <TabsControlItem>
          <TabsControlButton
            type={'button'}
            className={activeTab === '4' ? 'active' : ''}
            onClick={() => setActiveTab('4')}
          >
            Bathroom
          </TabsControlButton>
        </TabsControlItem>
      </TabsControl>

      <TabsContent>
        <TabsContentItem
          className={activeTab === '0' ? 'disinfection active' : 'disinfection'}
        >
          <TabsContentWrapper>
            <TabsContentBgImage>
              <picture>
                <source type="image/webp" srcSet={image0SrcWebp} />
                <BgImage src={image0Src} />
              </picture>
            </TabsContentBgImage>
            <TabsContentDescription>
              <TabsContentTitle>Disinfection</TabsContentTitle>
              <TabsContentList>
                <TabsContentListItem>
                  Cleaners measure the temperature every day and report on any
                  deviations in their well-being
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wear gloves and approved masks at all times during
                  cleaning
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners disinfect all the surfaces that may potentially have
                  dangerous bacteria: door handles, TV remote controls,
                  telephones (at your request), laptops and keyboards, cupboard
                  handles, washing machines and refrigerators, window handles,
                  children’s toys
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners disinfect the sink, toilet, bathroom, shower, and
                  plumbing
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners open windows and make sure that your place is aired
                  well. Continuous air circulation is extremely important during
                  the quarantine
                </TabsContentListItem>
              </TabsContentList>
              {/*<TabsContentButton>Show More</TabsContentButton>*/}
            </TabsContentDescription>
          </TabsContentWrapper>
        </TabsContentItem>

        <TabsContentItem className={activeTab === '1' ? 'room active' : 'room'}>
          <TabsContentWrapper>
            <TabsContentBgImage>
              <picture>
                <source type="image/webp" srcSet={image1SrcWebp} />
                <BgImage src={image1Src} />
              </picture>
            </TabsContentBgImage>
            <TabsContentDescription>
              <TabsContentTitle>The Rooms</TabsContentTitle>
              <TabsContentList>
                <TabsContentListItem>
                  Cleaners fold clothes and put everything in order
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners change the linen and make the bed
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wipe all accessible surfaces, switches, doors, and
                  door handles
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wipe household appliances
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners clean mirrors and glass surfaces
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners vacuum carpets, wash the floors and wipe the skirting
                  boards
                </TabsContentListItem>
              </TabsContentList>
              {/*<TabsContentButton>Show More</TabsContentButton>*/}
            </TabsContentDescription>
          </TabsContentWrapper>
        </TabsContentItem>

        <TabsContentItem
          className={activeTab === '2' ? 'kitchen active' : 'kitchen'}
        >
          <TabsContentWrapper>
            <TabsContentBgImage>
              <picture>
                <source type="image/webp" srcSet={image2SrcWebp} />
                <BgImage src={image2Src} />
              </picture>
            </TabsContentBgImage>
            <TabsContentDescription>
              <TabsContentTitle>Kitchen</TabsContentTitle>
              <TabsContentList>
                <TabsContentListItem>
                  Cleaners wash dishes, clean the sink and household appliances
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wipe and disinfect all the surfaces, switches, doors
                  and handles
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners clean the outer surface of the stove, countertop,
                  partially walls and refrigerator
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wipe and disinfect household appliances
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wipe outer surfaces of the cabinets
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners vacuum and wash floors and skirting boards
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners take out trash
                </TabsContentListItem>
              </TabsContentList>
              {/*<TabsContentButton>Show More</TabsContentButton>*/}
            </TabsContentDescription>
          </TabsContentWrapper>
        </TabsContentItem>

        <TabsContentItem className={activeTab === '3' ? 'hall active' : 'hall'}>
          <TabsContentWrapper>
            <TabsContentBgImage>
              <picture>
                <source type="image/webp" srcSet={image3SrcWebp} />
                <BgImage src={image3Src} />
              </picture>
            </TabsContentBgImage>
            <TabsContentDescription>
              <TabsContentTitle>Corridor</TabsContentTitle>
              <TabsContentList>
                <TabsContentListItem>
                  Cleaners wipe and disinfect all accessible surfaces, switches,
                  front door and door handles
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners clean mirrors and glass surfaces
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners vacuum carpets, wash the floor and wipe the skirting
                  boards
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners arrange shoes
                </TabsContentListItem>
              </TabsContentList>
              {/*<TabsContentButton>Show More</TabsContentButton>*/}
            </TabsContentDescription>
          </TabsContentWrapper>
        </TabsContentItem>

        <TabsContentItem
          className={activeTab === '4' ? 'bathroom active' : 'bathroom'}
        >
          <TabsContentWrapper>
            <TabsContentBgImage>
              <picture>
                <source type="image/webp" srcSet={image4SrcWebp} />
                <BgImage src={image4Src} />
              </picture>
            </TabsContentBgImage>
            <TabsContentDescription>
              <TabsContentTitle>Bathroom</TabsContentTitle>
              <TabsContentList>
                <TabsContentListItem>
                  Cleaners wipe and disinfect all the surfaces, switches, doors
                  and handles
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners wash and disinfect appliances, shower, and bathtub
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners clean mirrors and glass surfaces
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners clean and disinfect the sink and toilet
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners vacuum mats, wash the floor and wipe the skirting
                  boards
                </TabsContentListItem>
                <TabsContentListItem>
                  Cleaners take out the trash
                </TabsContentListItem>
              </TabsContentList>
              {/*<TabsContentButton>Show More</TabsContentButton>*/}
            </TabsContentDescription>
          </TabsContentWrapper>
        </TabsContentItem>
      </TabsContent>
    </TabsContainer>
  );
}

const TabsContainer = styled.div`
  ${media.tabletAndMobile(css`
    padding: 0 20px;
    margin: 0 auto;
    max-width: 545px;
  `)}
`;

const TabsControl = styled.ul`
  display: flex;
  max-width: 780px;
  margin: 0 auto 60px;

  ${media.tabletAndMobile(css`
    flex-wrap: wrap;
    margin-bottom: 0;
  `)}
`;

const TabsControlItem = styled.li`
  display: flex;
  flex: 1 1 25%;

  //&:first-child button {
  //  border-radius: 5px 0 0 5px;
  //}
  //
  //&:last-child button {
  //  border-radius: 0 5px 5px 0;
  //}

  ${media.tabletAndMobile(css`
    flex: 1 1 50%;
    padding: 0 10px;
    margin-bottom: 10px;

    //&:nth-last-child(-n + 2) {
    //  margin-bottom: 0;
    //}

    &:last-child {
      margin-bottom: 0;
      padding: 0;
    }

    button {
      border-radius: 5px;
    }

    &:nth-child(odd) {
      padding-left: 0;
    }

    &:nth-child(even) {
      padding-right: 0;
    }
  `)}

  ${media.mobile(css`
    padding: 0 2.5px;
  `)}
`;

const TabsControlButton = styled.button`
  display: block;
  width: 100%;
  line-height: 50px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: #88919d;
  text-align: center;
  transition: 0.3s;
  background-color: ${colors.tabsButtonColor};

  &:hover {
    background-color: ${colors.tabsButtonColorHover};
  }

  &.active {
    color: ${colors.white};
    background-color: ${colors.green};
  }
`;

const TabsContent = styled.div``;

const TabsContentItem = styled.div`
  display: none;
  padding-top: 75px;
  padding-bottom: 30px;

  &.active {
    position: relative;
    display: flex;
    justify-content: space-between;
    min-height: 600px;
    overflow: hidden;

    ${media.tabletAndMobile(css`
      max-width: 600px;
      margin: 0 auto;
      min-height: initial;
    `)}

    &::before {
      content: '';
      display: block;
      flex: 1 1 50%;

      ${media.tabletAndMobile(css`
        display: none;
      `)}
    }

    > * {
      flex: 1 1 50%;
    }
  }
`;

const TabsContentWrapper = styled.div`
  &::before {
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    right: 0;
    z-index: 1;
    content: '';
    display: block;
    background-color: rgba(255, 255, 255, 0.8);

    ${media.tabletAndMobile(css`
      display: none;
    `)}
  }
`;

const TabsContentBgImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .room & {
    top: -57%;
    bottom: -57%;
  }

  .kitchen & img {
    height: 100%;
  }

  img {
    width: 100%;
  }

  ${media.tabletAndMobile(css`
    display: none;
  `)}
`;

const BgImage = styled(Image)`
  object-fit: cover;
  height: 100%;
`;

const TabsContentDescription = styled.div`
  position: relative;
  z-index: 2;
  padding-left: 80px;
  max-width: 590px;

  ${media.tabletAndMobile(css`
    padding-left: 0;
  `)}
`;

const TabsContentTitle = styled.h2`
  margin: 0 0 35px;
  font-size: 32px;
  line-height: 45px;
  letter-spacing: -0.8px;
  text-align: left;
  font-weight: 500;
`;

const TabsContentList = styled.ul``;

const TabsContentListItem = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    width: 9px;
    height: 2px;
    background-color: #c2c2c2;
  }
`;

const TabsContentButton = styled.button`
  display: block;
  padding: 0 45px;
  margin-top: 45px;
  color: ${colors.white};
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${colors.green};
  border-radius: 5px;
  transition: 0.3s;

  &:hover,
  &:focus {
    background-color: ${colors.greenHover};
  }

  ${media.tabletAndMobile(css`
    margin: 45px auto 0;
  `)}
`;

export default Tabs;
