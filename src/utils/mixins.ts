import { css, keyframes } from 'styled-components';

import { CssSnippet } from '@typings/common';
import { colors } from '@constants/theme';

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 414,
  smallTablet: 768,
  tablet: 1024,
  laptop: 1260,
  desktop: 1500,
};

function createMediaMixin({
  min,
  max,
}: {
  min?: number;
  max?: number;
}): (snippet: CssSnippet) => CssSnippet {
  const media =
    min && max
      ? `@media (min-width: ${min}px) and (max-width: ${max}px)`
      : min && !max
      ? `@media (min-width: ${min}px)`
      : !min && max
      ? `@media (max-width: ${max}px)`
      : null;

  return styles => css`
    ${media} {
      ${styles};
    }
  `;
}

export const media = {
  mobileL: createMediaMixin({ max: sizes.mobileL }),
  mobile: createMediaMixin({ max: sizes.smallTablet - 1 }),
  noMobile: createMediaMixin({ min: sizes.smallTablet }),
  smallTabletAndMobile: createMediaMixin({ max: sizes.tablet - 1 }),
  smallTablet: createMediaMixin({
    min: sizes.smallTablet,
    max: sizes.tablet - 1,
  }),
  tabletAndMobile: createMediaMixin({ max: sizes.laptop - 1 }),
  tablet: createMediaMixin({ min: sizes.smallTablet, max: sizes.laptop - 1 }),
  laptopAndTablet: createMediaMixin({
    min: sizes.smallTablet,
    max: sizes.desktop - 1,
  }),
  laptop: createMediaMixin({ min: sizes.laptop, max: sizes.desktop - 1 }),
  laptopAndDesktop: createMediaMixin({ min: sizes.laptop }),
  noDesktop: createMediaMixin({ max: sizes.desktop - 1 }),
  // mobile320: `(max-width: 374px)`,
  // mobile414: `(max-width: ${sizes.mobileL - 1}px)`,
  // mobile440: `(max-width: 465px)`,
  // noMobile: `(min-width: ${sizes.tablet}px)`,
  // tablet: `(min-width: ${sizes.tablet}px) and (max-width: ${sizes.laptop - 1}px)`,
  // laptop_and_tablet: `(min-width: ${
  //   sizes.tablet
  // }px) and (max-width: ${sizes.desktop - 1}px)`,
  // laptop_and_big_tablet: `(min-width: ${
  //   sizes.bigTablet
  // }px) and (max-width: ${sizes.desktop - 1}px)`,
  // desktop: `(min-width: ${sizes.laptop}px)`,
};

export const outlineShadow = `0 0 0 1.5px ${colors.outline}`;
export const getOutlineShadow = (color: string = colors.outline) =>
  `0 0 0 1.5px ${color}`;

export const buttonReset = css<{ disabled?: boolean }>`
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  outline: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &:disabled {
    cursor: default;
  }
`;

export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
`;

/**
 * Polyfill for "object-fit" CSS property
 * Source: https://github.com/fregante/object-fit-images#usage
 */
export function objectFit(
  value: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down',
) {
  return css`
    object-fit: ${value};
    font-family: 'object-fit: ${value};';
  `;
}

export const placeholderAnimation = keyframes`
0% {
  background-position: -1200px 0;
}
100% {
  background-position: 1200px 0;
}
`;

export const placeholderAnimationCss = css`
  animation: ${placeholderAnimation} 2s linear;
  animation-iteration-count: infinite;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.08) 0,
    rgba(0, 0, 0, 0.15) 15%,
    rgba(0, 0, 0, 0.08) 30%
  );
  background-size: 1200px 100%;
`;
