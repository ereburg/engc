import React from 'react';
import { useSelect } from 'downshift';
import styled, { css } from 'styled-components';

import { ReactComponent as ClockIcon } from '@assets/svg/clock.svg';
import { Nullable, Option } from '@typings/common';

export type SelectOption = Option<number | string>;

function convertItemToString(option: Nullable<SelectOption>): string {
  return option ? option.label : '';
}

type Props = {
  options: Array<SelectOption>;
  value: Nullable<SelectOption>;
  onChange: (selectedOption: Nullable<SelectOption>) => void;
};

function Select({ options, value, onChange }: Props) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    selectedItem: value,
    items: options,
    itemToString: convertItemToString,
    onSelectedItemChange: changes => {
      onChange && onChange(changes.selectedItem ?? null);
    },
  });

  return (
    <Container>
      <ValueButton {...getToggleButtonProps()} type="button">
        <PrefixIcon as={ClockIcon} />
        <SelectedItemLabel title={convertItemToString(selectedItem)}>
          <span
            dangerouslySetInnerHTML={{
              __html: convertItemToString(selectedItem),
            }}
          />
        </SelectedItemLabel>
        {/*<Indicator>&#9660;</Indicator>*/}
      </ValueButton>
      {isOpen && (
        <Menu {...getMenuProps()}>
          {options.map((item, index) => (
            <MenuItem
              isHighlighted={highlightedIndex === index}
              isSelected={
                selectedItem ? selectedItem.value === item.value : false
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              <span dangerouslySetInnerHTML={{ __html: item.label }} />
            </MenuItem>
          ))}
        </Menu>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ValueButton = styled.button`
  width: 100%;
  text-align: left;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  padding: 0 52px 0 50px;
  transition: all 200ms ease;
  line-height: 48px;
`;

const SelectedItemLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #3d3d3d;
`;

const PrefixIcon = styled.svg`
  position: absolute;

  display: block;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  width: 20px;
  height: 20px;
`;

const Indicator = styled.span`
  margin-left: auto;
  padding-left: 10px;
`;

const Menu = styled.ul`
  background-color: white;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.25),
    0 0 1px 0 rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  margin-top: 2px;
  border-radius: 5px;
  padding: 5px 0;
`;

const MenuItem = styled.li<{ isSelected: boolean; isHighlighted: boolean }>`
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;
  font-size: 16px;

  ${props =>
    props.isSelected || props.isHighlighted
      ? css`
          background-color: #f2f9fc;
          color: #333;
        `
      : null}
`;

export default Select;
