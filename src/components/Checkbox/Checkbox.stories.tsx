import React from 'react';

import Checkbox from './Checkbox';

function withPadding(story: () => React.ReactChild) {
  return <div style={{ padding: 20 }}>{story()}</div>;
}

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withPadding],
};

export const checkbox = () => <Checkbox label="Checkbox label" />;
checkbox.story = {
  name: 'default',
};
