import React from 'react';
import styled from 'styled-components';

import { ReactComponent as KitchenIcon } from '@assets/svg/kitchen.svg';
import { ReactComponent as BathIcon } from '@assets/svg/bath.svg';
import { ReactComponent as ApartmentIcon } from '@assets/svg/appartment.svg';
import { ReactComponent as CorridorIcon } from '@assets/svg/corridor.svg';
import RoomItem from '@components/modals/Home/AboutCleaning/components/RoomItem';

const ITEM_1 = {
  icon: KitchenIcon,
  title: 'В жилых комнатах',
  subItems: [
    'Складываем одежду и расставляем вещи',
    'Заправляем постель или меняем постельное белье',
    'Протираем все доступные поверхности, выключатели, двери и дверные ручки',
    'Протираем бытовую технику',
    'Чистим зеркала и стеклянные поверхности',
    'Пылесосим ковры, моем пол и протираем плинтусы',
  ],
};

const ITEM_2 = {
  icon: BathIcon,
  title: 'В ванной и туалете',
  subItems: [
    'Протираем все доступные поверхности, выключатели, двери и дверные ручки',
    'Моем сантехнику, душевую кабинку и ванную',
    'Чистим зеркала и стеклянные поверхности',
    'Чистим раковину и дезинфицируем унитаз',
    'Пылесосим коврики, моем пол и протираем плинтусы',
    'Выносим мусор',
  ],
};

const ITEM_3 = {
  icon: ApartmentIcon,
  title: 'На кухне',
  subItems: [
    'Моем посуду, чистим раковину и сантехнику',
    'Протираем все доступные поверхности, выключатели, двери и дверные ручки',
    'Моем снаружи плиту, столешницу, кухонный фартук и холодильник',
    'Протираем бытовую технику',
    'Протираем фасады кухонных шкафчиков',
    'Пылесосим и моем пол, протираем плинтусы',
    'Выносим мусор',
  ],
};

const ITEM_4 = {
  icon: CorridorIcon,
  title: 'В коридоре',
  subItems: [
    'Протираем все доступные поверхности, выключатели, входную дверь и дверные ручки',
    'Чистим зеркала и стеклянные поверхности',
    'Пылесосим ковры, моем пол и протираем плинтусы',
    'Протираем бытовую технику',
    'Поправляем обувь',
  ],
};

const ITEMS_MOCK = [ITEM_1, ITEM_2, ITEM_3, ITEM_4];

function RoomsList() {
  return (
    <List>
      {ITEMS_MOCK.map((item, index) => (
        <RoomItem key={index} roomItem={item} />
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default RoomsList;
