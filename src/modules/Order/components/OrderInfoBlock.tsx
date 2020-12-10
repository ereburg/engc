import React from 'react';
import styled from 'styled-components';

function calculateDuration(bathroomCount: number, roomCount: number): number {
  return 3 + (bathroomCount - 1) + (roomCount - 1) * 0.5;
}

function calculatePrice(bathroomCount: number, roomCount: number): number {
  const hours = calculateDuration(bathroomCount, roomCount);
  return Math.floor(hours * 49);
}

type Props = {
  bathroomCount: number;
  roomCount: number;
};

function OrderInfoBlock({ bathroomCount, roomCount }: Props) {
  return (
    <Container>
      <SectionTitle>
        Cleaning: {roomCount} bed, {bathroomCount} bath
      </SectionTitle>
      <ParamList>
        <li>
          <ParamRow>
            <ParamName>Cleaning time</ParamName>
            <ParamValue>
              ~{calculateDuration(bathroomCount, roomCount)} h
            </ParamValue>
          </ParamRow>
        </li>
      </ParamList>
      <TotalRow>
        <TotalParam>TOTAL</TotalParam>
        <TotalValue>${calculatePrice(bathroomCount, roomCount)}</TotalValue>
      </TotalRow>
    </Container>
  );
}

const Container = styled.section`
  padding: 25px 30px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #dadada;
`;

const SectionTitle = styled.h3`
  display: block;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #212121;
`;

const ParamList = styled.ul`
  border-bottom: 1px solid #ededed;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const ParamRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParamName = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: #868f9b;
`;

const ParamValue = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: #12cf7c;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalParam = styled.span`
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
  color: #3d3d3d;
`;

const TotalValue = styled.span`
  font-size: 30px;
  line-height: 30px;
  font-weight: 900;
  color: #12cf7c;

  sup {
    font-weight: 700;
  }
`;

export default OrderInfoBlock;
