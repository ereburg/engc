import styled from 'styled-components';
import { colors } from '@constants/theme';

export const DatePickerContainer = styled.div`
  .DayPicker {
    width: 366px;
    font-size: 14px;

    &-wrapper {
      padding-bottom: 0;
    }

    //&-Weekdays {}
    //&-WeekdaysRow {}

    &-Weekday {
      color: #88919d;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      > abbr {
        text-transform: uppercase;
      }
    }

    &-Caption {
      line-height: 24px;
      height: 24px;
      margin-bottom: 20px;
      margin-top: 0;
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }

    &-Week {
      border-bottom: 1px solid #f4f4f4;

      &:last-child {
        border-bottom: 0;
      }
    }

    &-Day {
      border-radius: 0;
      font-size: 16px;
      color: #212121;
      font-weight: 500;
      outline: 0;
      height: 48px;

      &:focus {
        position: relative;
        border-radius: 1px;
      }

      &--outside {
        border: 0;
        color: #88919d;
      }

      &--today {
        font-weight: bold;
      }

      &--selected {
        &:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
          background-color: ${colors.green};
          color: #ffffff;

          &:hover {
            //background-color: #35a38d;
          }
        }
      }

      &--disabled {
        color: #cccccc;
        pointer-events: none;
      }
    }

    &:not(.DayPicker--interactionDisabled) {
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
        background-color: white;
      }
    }

    &-Months {
      padding: 20px 15px;
    }

    &-Month {
      width: 100%;
      margin: 0;

      //&:first-child {
      //  margin-left: 0;
      //}
    }
  }
`;
