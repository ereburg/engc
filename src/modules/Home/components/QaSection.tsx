import React from 'react';
import styled, { css } from 'styled-components';

import { Section, SectionTitle } from '../Home.style';
import ContentContainer from '@components/ContentContainer';
import { colors } from '@constants/theme';
import { media } from '@utils/mixins';

import Accordion from '@modules/Home/components/Accordion';

const QA_ITEM_1 = {
  titleQA: 'Делаете ли вы уборку после ремонта?',
  contentQA:
    'Да, конечно. Данная уборка проводится в рамках почасовой уборки.\n' +
    'Дело в том, что уборка после ремонта сильно\n' +
    'отличается от стандартной уборки. Даже если вы уже убрали\n' +
    'крупный мусор, остаётся много пыли, разводов и пятен от краски,\n' +
    'шпатлёвки, лака и так далее. Чтобы убрать их, требуется\n' +
    'специализированный инвентарь и химия. Также данными уборками\n' +
    'занимается определенная группа клинеров, прошедшая специальное\n' +
    'обучение. Для того, чтобы подсчитать приблизительную стоимость,\n' +
    'свяжитесь с нами по номеру +375291331213',
};

const QA_ITEM_2 = {
  titleQA:
    'У меня раздельный санузел, какое количество мне указывать при оформлении заказа?',
  contentQA:
    'Если у вас раздельный санузел, а именно: ванная комната и\n' +
    'отдельный туалет, то вы в процессе оформления заказа должны\n' +
    'выбрать один санузел.',
};

const QA_ITEM_3 = {
  titleQA:
    'Мне нужно, чтобы вы отодвинули мебель, убрали под ней, вернули\n' +
    'всё на место. Справитесь?',
  contentQA:
    'К сожалению, нет. У нас\n' +
    'нет специального оборудования, чтобы передвигать мебель. Без\n' +
    'него можно повредить ваше напольное покрытие и спину нашего\n' +
    'клинера.',
};

const QA_ITEM_4 = {
  titleQA: 'Нужно ли мне быть дома во время уборки?',
  contentQA:
    'Многие клиенты остаются дома, когда впервые заказывают уборку в\n' +
    'Getclean. Но уже в следующий раз они предпочитают отправиться по\n' +
    'делам, оставив ключи клинеру или заказав доставку ключей на\n' +
    'работу или в другое удобное место.',
};

const QA_ITEM_5 = {
  titleQA: 'Убираете ли вы офисы?',
  contentQA:
    'К сожалению, пока мы\n' +
    'решили сконцентрироваться на уборках квартир. Мы обязательно\n' +
    'начнем работать и с офисными помещениями, и с задачами\n' +
    'юридических лиц, и обязательно об этом напишем. Оставайтесь с\n' +
    'нами!',
};

const MOCK_ITEMS = [QA_ITEM_1, QA_ITEM_2, QA_ITEM_3, QA_ITEM_4, QA_ITEM_5];

function QaSection() {
  return (
    <SectionGray>
      <ContentContainer>
        <SectionTitle>F.A.Q.</SectionTitle>
        <AccordsBlock>
          <QaBody>
            {MOCK_ITEMS.map((accordionItem, index) => (
              <Accordion key={index} accordionItem={accordionItem} />
            ))}
          </QaBody>
        </AccordsBlock>
      </ContentContainer>
    </SectionGray>
  );
}

const SectionGray = styled(Section)`
  background-color: ${colors.grayBg};
`;

const AccordsBlock = styled.div``;

const QaBody = styled.ul`
  border-top: 1px solid #dadcda;

  ${media.tabletAndMobile(css`
    max-width: 680px;
    padding: 0 20px;
    margin: 0 auto;
  `)}

  ${media.mobile(css`
    padding: 0;
  `)}
`;

export default QaSection;
