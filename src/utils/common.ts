import React from 'react';
import { ServerResponse } from 'http';
import round from 'lodash/round';
import { Option } from '@typings/common';

/** https://github.com/zeit/next.js/issues/5354#issuecomment-520305040 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function isResSent(res: ServerResponse): boolean {
  return res.finished || res.headersSent;
}

export function isomorphicLog(message: any): void {
  if (isBrowser()) {
    const isDevelopmentEnv = process.env.NODE_ENV === 'development';
    isDevelopmentEnv && console.log(`%c ${message}`, 'color: green');
  } else {
    console.log(
      require('util').inspect(message, {
        colors: true,
      }),
    );
  }
}

function getNumberSign(value: number): string {
  return value === 0 ? '' : value > 0 ? '+' : '-';
}
/** 12345678 => "12 345 678" */
export function formatNumber(
  value: number,
  options?: { precision?: number; withSign?: boolean },
): string {
  let result =
    typeof options?.precision === 'number'
      ? round(value, options.precision).toFixed(options.precision)
      : value.toString();

  result = result.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ').replace('.', ',');

  if (options?.withSign) {
    result = getNumberSign(value) + result;
  }

  return result;
}

export function generateNumberArray(length: number): Array<number> {
  return Array.from({ length }, (_, index) => index);
}

export function isStringGuard(value: any): value is string {
  return typeof value === 'string';
}

export function isObjectGuard(value: any): value is object {
  return typeof value === 'object';
}

export function isNonNullObjectGuard(
  value: any,
): value is { [key: string]: any } {
  return isObjectGuard(value) && Boolean(value);
}

export function isEnum<T extends string>(
  value: any,
  enumArray: Array<T>,
): value is T {
  return enumArray.includes(value);
}

export function setRefValue<T>(ref: React.Ref<T>, value: T): void {
  if (!ref) return;

  if (typeof ref === 'function') {
    ref(value);
  } else {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

export function generateTimeOptions(
  min: number,
  max: number,
): Array<Option<number>> {
  const hours = [];

  for (let i = min; i <= max; i++) {
    hours.push(i);

    if (i !== max) {
      hours.push(i + 0.5);
    }
  }

  return hours.map(hour => {
    const hasFraction = hour % 1 === 0.5;
    const hourWithoutFraction = Math.floor(hour);
    const hoursString =
      hourWithoutFraction < 10
        ? `0${hourWithoutFraction}`
        : hourWithoutFraction.toString();
    const minutesString = hasFraction ? '30' : '00';
    return { value: hour, label: `${hoursString}:${minutesString}` };
  });
}
