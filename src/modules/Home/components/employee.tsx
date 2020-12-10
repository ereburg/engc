import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';
import { ReactComponent as StarSmall } from '@assets/svg/star-small.svg';
import { media } from '@utils/mixins';
import image0SrcWebp from '@assets/images/home/disinfection.png';

type Props = {
  employeeItem: {
    imageSrc: string;
    imageSrcWebp: string;
    name: string;
    count: string;
    rating: string;
  };
};

function Employee({ employeeItem }: Props) {
  const { imageSrc, imageSrcWebp, name, count, rating } = employeeItem;
  return (
    <Item>
      <Photo>
        <picture>
          <source type="image/webp" srcSet={imageSrcWebp} />
          <img src={imageSrc} alt="" />
        </picture>
      </Photo>
      <Name>{name}</Name>
      <Count>{count}</Count>
      <Rating>
        <StarSmall />
        {rating}
      </Rating>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;

  ${media.mobile(css`
    padding: 0 30px;
  `)}
`;

const Photo = styled.div`
  margin-bottom: 40px;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  border: 2px solid ${colors.green};
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 156px;
    overflow: hidden;
    border-radius: 100%;
    border: 7px solid ${colors.white};
  }
`;

const Name = styled.span`
  display: block;
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  color: #212121;
  text-align: center;
`;

const Count = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: -0.4px;
  text-align: center;
`;

const Rating = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 13px 6px 29px;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: ${colors.black};
  background-color: ${colors.yellowLight};
  border-radius: 5px;

  svg {
    position: absolute;
    left: 11px;
    top: 50%;
    transform: translateY(-50%);
    fill: currentColor;
  }
`;

export default Employee;
