import { Meta, Story } from "@storybook/react";
import React from 'react'
import HeaderItems from "./Headeritems";
import { HeaderElementsProps } from "./Headeritems";

export default {
  title: "HeaderItems",
  component: HeaderItems,
} as Meta;

const Template: Story<HeaderElementsProps> = (args) => <HeaderItems {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  headerNavElem: [
    {
      text: 'About Me',
    },
    {
      text: 'My Foto',
    },
    {
      text: 'Contacts',
    },
  ],
}

