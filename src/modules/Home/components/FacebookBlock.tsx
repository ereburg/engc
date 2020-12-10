import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@constants/theme';
import { media } from '@utils/mixins';
import ContentContainer from '@components/ContentContainer';

function FacebookBlock() {
  return (
    <FacebookSection>
      <ContentContainer>
        <FacebookInner>
          <FacebookTestimonials>
            <iframe
              name="f1f92fd28ebddc"
              width="450px"
              height="1000px"
              data-testid="fb:like Facebook Social Plugin"
              title="fb:like Facebook Social Plugin"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v2.8/plugins/like.php?action=like&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df937d14ff28648%26domain%3Dgetclean.by%26origin%3Dhttps%253A%252F%252Fgetclean.by%252Ff2c1e427aae09fc%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fgetclean.by%2F&amp;layout=standard&amp;locale=ru_RU&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;width=450"
              style={{
                border: 'none',
                visibility: 'visible',
                width: '450px',
                height: '28px',
              }}
              className=""
            ></iframe>
          </FacebookTestimonials>
          <FacebookButton href="#">Все отзывы на Facebook</FacebookButton>
        </FacebookInner>
      </ContentContainer>
    </FacebookSection>
  );
}

const FacebookSection = styled.section`
  padding: 15px 0;
  background-color: #f9f9f9;

  ${media.tabletAndMobile(css`
    display: none;
  `)}
`;

const FacebookInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FacebookTestimonials = styled.div`
  flex: 1 1 1px;
`;

const FacebookButton = styled.a`
  background-color: #4163a3;
  max-width: 315px;
  display: inline-block;
  vertical-align: top;
  border: 0;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none !important;
  text-align: center;
  font-size: 16px;
  line-height: 60px;
  padding: 0 45px;
  border-radius: 5px;
  color: ${colors.white};
  width: 100%;
  font-weight: 700;

  &:focus,
  &:hover {
    background-color: #3a5891;
  }
`;

export default FacebookBlock;
