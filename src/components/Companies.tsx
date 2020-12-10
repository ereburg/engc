import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@components/ContentContainer';
import { media } from '@utils/mixins';

type Props = {
  className?: string;
  companyList: Array<{ link: string; imageUrl: string }>;
};

function Companies({ className, companyList }: Props) {
  return (
    <Section className={className}>
      <ContentContainer>
        <List data-list>
          {companyList.map((company, index) => (
            <Item key={index} data-item>
              <ItemLink
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={company.imageUrl} alt="" />
              </ItemLink>
            </Item>
          ))}
        </List>
      </ContentContainer>
    </Section>
  );
}

const Section = styled.section`
  padding: 30px 0;
  background-color: #f5f5f5;

  ${media.laptopAndTablet(css`
    padding: 25px 0;
  `)}

  ${media.smallTabletAndMobile(css`
    padding: 15px 0;
  `)}
  
  ${media.mobile(css`
    padding: 40px 0;
  `)}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 880px;
  margin: -20px auto;

  ${media.tabletAndMobile(css`
    max-width: 100%;
    margin: -10px;
  `)}

  ${media.mobile(css`
    flex-direction: column;
    align-items: center;
    margin: 0;
  `)}
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  ${media.mobile(css`
    width: 220px;
    margin: 10px;

    &:not(:last-child) {
      margin-bottom: 45px;
    }

    img {
      height: auto;
    }
  `)}
`;

const ItemLink = styled.a`
  display: block;
  filter: grayscale(1);
  opacity: 0.7;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

export default Companies;
