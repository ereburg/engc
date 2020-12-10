import React from 'react';
import styled from 'styled-components';

import { colors } from '@constants/theme';

type Props = {
  className?: string;
  orderItem: {
    title: string;
    text: string;
    itemIcon: React.ReactNode;
  };
};

function OrderItem({ className, orderItem }: Props) {
  const { title, text, itemIcon } = orderItem;
  return (
    <Item className={className}>
      <Photo>{itemIcon}</Photo>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{text}</ItemText>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  height: 100px;
  width: auto;
  color: ${colors.green};

  img {
    height: 100px;
    width: auto;
  }

  svg {
    fill: currentColor;
  }
`;

const ItemTitle = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.4px;
  color: ${colors.blackText};
`;

const ItemText = styled.p`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #868f9b;
  font-weight: 500;
`;

export default OrderItem;
