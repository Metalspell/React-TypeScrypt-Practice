import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList, { UserListProps } from '../UserList';
import { Provider } from "react-redux";
import store from '../../../store';


describe("App", () => {
  let props: UserListProps;
  beforeEach(() => {
    render(
      <Provider store={store}>
        <UserList {...props} />
      </Provider>,
    );
  });

  it('Did the modalwindow render fine?', () => {
    expect(screen.getAllByRole('dialog')).toHaveLength(1);
  })

  it('do the modal window have correct role?', () => {
    expect(screen.queryByRole('dialog')).toHaveAttribute("aria-labelledby", "modalTitle");
    expect(screen.queryByRole('dialog')).toHaveAttribute("aria-describedby", "usersList");
  })

  it("Do our modal has title", () => {
    expect(screen.getByText("TechMango team:")).toBeInTheDocument();
  });
})
