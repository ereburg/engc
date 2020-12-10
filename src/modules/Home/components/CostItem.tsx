import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/theme';

type Props = {
  costItem: {
    title: string;
    price: string;
  };
};

function CostItem({ costItem }: Props) {
  const { title, price } = costItem;
  return (
    <Item>
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Item>
  );
}

const Item = styled.div`
  width: 100%;
  padding: 48px 10px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0 2px 4px 0 #ececec;
`;

const Title = styled.span`
  display: block;
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  color: ${colors.black};
  text-align: center;
`;

const Price = styled.span`
  display: block;
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  color: ${colors.green};
  text-align: center;
`;

export default CostItem;
