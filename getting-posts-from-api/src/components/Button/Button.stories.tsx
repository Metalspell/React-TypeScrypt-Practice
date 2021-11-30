import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from './Button';

const meta: Meta = {
  title: 'components/button',
  component: Button,
  args: {
    children: "Click Me!"
  },
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      option: ["primary", "secondary", "tertiary"],
      control: { type: "radio" }
    }
  }
};

const Template: Story<ButtonProps> = args => <Button {...args} />

export const primary = Template.bind({})

export default meta;