// TextInput.stories.tsx
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => {
  const [value, setValue] = useState('');

  return <TextInput {...args} value={value} onChange={setValue} />;
};

export const Username = Template.bind({});
Username.args = {
  placeholder: 'Username',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Password',
  type: 'password',
};


