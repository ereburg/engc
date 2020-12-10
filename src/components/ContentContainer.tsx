import styled, { css } from 'styled-components';

import { media } from '@utils/mixins';

const ContentContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${media.tablet(css`
    max-width: 1040px;
  `)}

  ${media.smallTabletAndMobile(css`
    max-width: 100%;
    padding: 0 20px;
  `)}
`;

export default ContentContainer;
