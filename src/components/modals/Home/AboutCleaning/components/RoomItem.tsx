import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@utils/mixins';
import { colors } from '@constants/theme';
import {
  ItemTitle,
  ItemIcon,
} from '@components/modals/Home/AboutCleaning/AboutCleaning.style';

type Props = {
  roomItem: {
    icon: React.ReactNode;
    title: string;
    subItems: Array<string>;
  };
};

function RoomItem({ roomItem }: Props) {
  const { icon, title, subItems } = roomItem;
  return (
    <Item>
      <ItemIcon>{icon}</ItemIcon>
      <ItemTitle>{title}</ItemTitle>
      <SubList>
        {subItems.map((subItem, index) => (
          <SubItem key={index}>{subItem}</SubItem>
        ))}
      </SubList>
    </Item>
  );
}

const Item = styled.li`
  width: 50%;
  padding: 15px;

  ${media.mobile(css`
    width: 100%;
  `)}
`;

const SubList = styled.ul``;

const SubItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;

  &:before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 5px;
    height: 5px;
    background-color: ${colors.blackText};
    border-radius: 100%;
  }

  ${media.mobile(css`
    font-size: 14px;
  `)}
`;

export default RoomItem;
