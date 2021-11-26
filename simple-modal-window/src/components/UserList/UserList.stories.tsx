import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import UserList, { UserListProps } from "./UserList";
import store from '../../store/index';
import data from "../../data/users";

const meta1: Meta = {
  title: 'components/UserList',
  component: UserList,

  argTypes: {
    modalWrapperVariant: {
      option: ['first', 'second', 'third', 'inactive'],
      control: { type: "radio" }
    },
    modalTitleVariant: {
      option: ['modal-title-big-text', 'modal-title-medium-text', 'modal-title-small-text'],
      control: { type: "radio" }
    },
    usersListVariant: {
      option: ["users-list-centered", "users-list-not-centered"]
    },
    eachUserVariant: {
      option: ['each-user-small-text', 'each-user-big-text']
    }
  }
};

const Template: Story<UserListProps> = (args) =>
  <Provider store={store}>
    <UserList {...args}>
      
    </UserList>
  </Provider>

export const primary = Template.bind({})

primary.args = {
  modalWrapperVariant: 'first',
  modalTitleVariant: 'modal-title-medium-text',
  usersListVariant: 'users-list-not-centered',
};

export default meta1;