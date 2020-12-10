import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { colors } from '@constants/theme';

type OverlayProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Overlay({ className, children }: OverlayProps) {
  return <OverlayBlock className={className}>{children}</OverlayBlock>;
}

type SpinnerColor = 'green' | 'yellow' | 'blue';

type Props = {
  className?: string;
  absolute?: boolean;
  text?: string;
  color?: SpinnerColor;
};

function Spinner({
  className,
  absolute = true,
  text = 'Загрузка...',
  color = 'green',
}: Props) {
  return (
    <Container className={className} absolute={absolute}>
      <Circle color={color} />
      {text ? <StatusText>{text}</StatusText> : null}
    </Container>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`;

const colorMap: Record<SpinnerColor, string> = {
  green: colors.green,
  yellow: colors.yellow,
  blue: colors.blue,
};

const Circle = styled.div<{ color: SpinnerColor }>`
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border: 2px solid #f5f5f5;
  border-top: 3px solid ${props => colorMap[props.color]};
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
`;

const Container = styled.div<{ absolute?: boolean }>`
  position: relative;
  min-height: 90px;
  z-index: 5;

  ${props =>
    props.absolute
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : ''};
`;

const StatusText = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 10px;
`;

const OverlayBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

export default Spinner;
