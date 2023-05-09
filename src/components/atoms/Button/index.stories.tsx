import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonComponent, ButtonProps } from '.';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonProps> = (args: JSX.IntrinsicAttributes) => (
  <ButtonComponent label={''} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button'
};
