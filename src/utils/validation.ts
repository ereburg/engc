/**
 * Reference - The regex used in input with type="email" from W3C HTML Living Standard:
 * https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type=email)
 */
import { Nullable } from '@typings/common';

export const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const validators = {
  required(value: any) {
    if (typeof value === 'string') {
      return !value.trim();
    }

    return !value;
  },
  email(value: string) {
    return !EMAIL_REGEXP.test(value);
  },
  phone(value: string) {
    const regexp = /^\d{9}$/;
    return !regexp.test(value);
  },
  number(value: string) {
    const regexp = /^\d+$/;
    return !regexp.test(value);
  },
};

export function isNumericString(string: string) {
  return /^\d*$/.test(string);
}

export function integerChecker(string: string, previousValue: string) {
  return isNumericString(string) ? string : previousValue;
}
