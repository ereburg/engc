import React from 'react';

import Companies from '@components/Companies';

import onlinerSrc from '@assets/images/companies/onliner.png';
import truthSrc from '@assets/images/companies/truth.png';
import wordSrc from '@assets/images/companies/word.jpg';
import relaxSrc from '@assets/images/companies/relax.png';

const ONLINER_ITEM = {
  link: 'https://realt.onliner.by/2016/06/30/klining/',
  imageUrl: onlinerSrc,
};

const TRUTH_ITEM = {
  link: 'http://www.kp.by/daily/26577/3593496/',
  imageUrl: truthSrc,
};

const WORD_ITEM = {
  link: 'http://slovodelu.by/articles/osnovatel-uber-proekta-getclean-/',
  imageUrl: wordSrc,
};

const RELAX_ITEM = {
  link:
    'https://mag.relax.by/city/topic/10516775-nashi-klijenty-ekonomyat-na-uborke-20-chasov-v-mesyac-razbirajem-rabotu-kliningovoj-kompanii-na-primere-minskoj-dvushki/',
  imageUrl: relaxSrc,
};

const COMPANIES_ITEMS = [ONLINER_ITEM, TRUTH_ITEM, WORD_ITEM, RELAX_ITEM];

function CompaniesReviews() {
  return <Companies companyList={COMPANIES_ITEMS} />;
}

export default CompaniesReviews;
