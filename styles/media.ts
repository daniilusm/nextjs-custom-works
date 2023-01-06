import { css } from 'styled-components';

export enum Viewport {
  mobile = 767,
  tablet = 1024,
  mediumDesktop = 1280,
  desktop = 1440,
  bigDesktop = 1920,
}

type ArgumentTypes = typeof css[];

export type ViewportKey = keyof typeof Viewport | 'largeDesktop';

export type ViewportShorthands = {
  m?: number | string;
  t?: number | string;
  d?: number | string;
  md?: number | string;
  bd?: number | string;
  ld?: number | string;
};

export const media = {
  tablet: (...args: ArgumentTypes) => css`
    @media (min-width: ${Viewport.mobile}px) {
      ${css(...args)}
    }
  `,
  mediumDesktop: (...args: ArgumentTypes) => css`
    @media (min-width: 1280px) {
      ${css(...args)}
    }
  `,
  desktop: (...args: ArgumentTypes) => css`
    @media (min-width: ${Viewport.tablet}px) {
      ${css(...args)}
    }
  `,
  bigDesktop: (...args: ArgumentTypes) => css`
    @media (min-width: ${Viewport.desktop}px) {
      ${css(...args)}
    }
  `,
  largeDesktop: (...args: ArgumentTypes) => css`
    @media (min-width: ${Viewport.bigDesktop}px) {
      ${css(...args)}
    }
  `,
  height:
    (maxHeight: number) =>
    (...args: ArgumentTypes) =>
      css`
        @media (max-height: ${maxHeight}px) {
          ${css(...args)}
        }
      `,
  bigDesktopMax: (...args: ArgumentTypes) => css`
    @media (max-width: ${Viewport.desktop}px) {
      ${css(...args)}
    }
  `,
};

export const isMobile = () => window.innerWidth < Viewport.mobile;

export const isTablet = () =>
  window.innerWidth >= Viewport.mobile && window.innerWidth < Viewport.tablet;

export const isDesktop = () =>
  window.innerWidth >= Viewport.tablet && window.innerWidth < Viewport.desktop;

export const isMediumDesktop = () =>
  window.innerWidth >= Viewport.mediumDesktop &&
  window.innerWidth < Viewport.desktop;

export const isBigDesktop = () =>
  window.innerWidth >= Viewport.desktop &&
  window.innerWidth < Viewport.bigDesktop;

export const isLargeDesktop = () => window.innerWidth >= Viewport.bigDesktop;

export const getSize = (sizes: ViewportShorthands) => {
  if (isMobile() && sizes.m) {
    return sizes.m;
  }

  if (isTablet() && sizes.t) {
    return sizes.t;
  }

  if (isMediumDesktop() && sizes.md) {
    return sizes.md;
  }

  if (isDesktop() && sizes.d) {
    return sizes.d;
  }

  if ((isBigDesktop() || isLargeDesktop()) && sizes.bd) {
    return sizes.bd;
  }
  if (isLargeDesktop() && sizes.ld) {
    return sizes.ld;
  }

  return (sizes.t || sizes.d || sizes.bd)!;
};
