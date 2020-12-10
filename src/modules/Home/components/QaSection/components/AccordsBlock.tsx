import React from 'react';
import styled from 'styled-components';

import QaAccord from './QaAccord';
//
// const ACCORD_ITEM1 = {
//   title: 'Делаете ли вы уборку после ремонта?',
//   text: (
//     <>
//       Да, конечно. Данная уборка проводится в рамках почасовой уборки. Дело в
//       том, что <a href="#">уборка после ремонта</a> сильно отличается от
//       стандартной уборки. Даже если вы уже убрали крупный мусор, остаётся много
//       пыли, разводов и пятен от краски, шпатлёвки, лака и так далее. Чтобы
//       убрать их, требуется специализированный инвентарь и химия. Также данными
//       уборками занимается определенная группа клинеров, прошедшая специальное
//       обучение. Для того, чтобы подсчитать приблизительную стоимость, свяжитесь
//       с нами по номеру +375291331213
//     </>
//   ),
// };

const ACCORD_ITEM2 = {
  title: 'What’s included in a antibacterial cleaning service?',
  text: (
    <>
      Our cleaning algorithm was developed by professionals in disinfecting and
      antibacterial cleaning. We brought our antibacterial cleaning up to the
      highest standard:
      <ul className={'accord-list'}>
        <li>
          Cleaners measure the temperature every day and report on any
          deviations in their well-being.
        </li>
        <li>
          Cleaners wear gloves and approved masks at all times during cleaning.
        </li>
        <li>
          Cleaners disinfect all the surfaces that may potentially have
          dangerous bacteria: door handles, TV remote controls, telephones (at
          your request), laptops and keyboards, cupboard handles, washing
          machines and refrigerators, window handles, children’s toys.
        </li>
        <li>
          Cleaners disinfect the sink, toilet, bathroom, shower, and plumbing.
        </li>
        <li>
          Cleaners open windows and make sure that your place is aired well.
          Continuous air circulation is extremely important during the
          quarantine.
        </li>
      </ul>
    </>
  ),
};

const ACCORD_ITEM3 = {
  title: 'Which GetClean professional will come to my place?',
  text:
    'GetClean has a vast network of experienced, top-rated cleaners. We hire and train cleaners based on our own cleaning technology.',
};

const ACCORD_ITEM4 = {
  title: 'Can I skip or reschedule bookings?',
  text: 'You can reschedule any booking without penalty',
};

const ACCORD_ITEM5 = {
  title: 'How much are house cleaning services? ',
  text:
    'This depends on the size of your house — enter how many bedrooms and bathrooms you have into the form above and and you will immediately know the price',
};

const MOCK_ITEMS = [
  // ACCORD_ITEM1,
  ACCORD_ITEM2,
  ACCORD_ITEM3,
  ACCORD_ITEM4,
  ACCORD_ITEM5,
];

function AccordsBlock() {
  return (
    <Accords>
      {MOCK_ITEMS.map((accordItem, index) => (
        <QaAccord key={index} accordItem={accordItem} />
      ))}
    </Accords>
  );
}

const Accords = styled.div`
  border-top: 1px solid #dadcda;

  .accord-list {
    list-style-type: none;
    padding-left: 25px;

    li {
      position: relative;

      &::before {
        position: absolute;
        top: 0;
        left: -25px;
        content: '–';
        display: inline-block;
      }
    }
  }
`;

export default AccordsBlock;
