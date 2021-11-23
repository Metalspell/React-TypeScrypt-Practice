import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import UserList, { UserListProps } from "./UserList";
import store from '../../store/index';

const meta1: Meta = {
  title: 'components/UserList',
  component: UserList,

  argTypes: {
    variant: {
      option: ['first', 'second', 'third', 'inactive'],
      control: { type: "radio" }
    }
  }
};

const Template: Story<UserListProps> = args =>
  <Provider store={store}>
    <UserList {...args} />
  </Provider>

export const primary = Template.bind({})

primary.args = {
  variant: 'first',
};

export default meta1;