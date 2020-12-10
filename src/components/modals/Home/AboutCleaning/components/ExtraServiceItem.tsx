import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@utils/mixins';
import {
  ItemIcon,
  ItemTitle,
} from '@components/modals/Home/AboutCleaning/AboutCleaning.style';

type Props = {
  extraItem: {
    icon: React.ReactNode;
    title: string;
    text: string;
  };
};

function ExtraServiceItem({ extraItem }: Props) {
  const { icon, title, text } = extraItem;
  return (
    <Item>
      <ItemIcon>{icon}</ItemIcon>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{text}</ItemDescription>
    </Item>
  );
}

const Item = styled.li`
  width: calc(33.333% - 10px);
  margin: 15px 5px;

  ${media.mobile(css`
    width: 100%;
  `)}
`;

const ItemDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #868f9b;
`;

export default ExtraServiceItem;
