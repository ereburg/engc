import React, { useState } from 'react';
//
// import { storiesOf } from '@storybook/react';
// // import { action } from '@storybook/addon-actions';
//
// // import { withContainer } from '@utils/storybook';
//
// import DatePicker from './DatePicker';
//
// // const dataChangeAction = action('Date change');
//
// type DatePickerProps = React.ComponentProps<typeof DatePicker>;
//
// type Props = {
//   children: (
//     props: Partial<DatePickerProps>,
//   ) => React.ReactElement<DatePickerProps> | null;
// };
//
// function DatePickerContainer({ children }: Props) {
//   const [value, setValue] = useState(new Date());
//
//   function onChange(newValue: Date) {
//     setValue(newValue);
//     dataChangeAction(newValue);
//   }
//
//   return (
//     <div style={{ padding: 10, width: 300 }}>
//       {children({ value, onChange })}
//     </div>
//   );
// }
//
// // storiesOf('DatePicker', module).add('default', () =>
// //   withContainer<DatePickerProps>(DatePickerContainer, DatePicker),
// // );
