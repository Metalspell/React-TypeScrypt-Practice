import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList, {UserListProps} from '../UserList';
import { Provider } from "react-redux";
import store from '../../../store';


describe("App", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <UserList />
      </Provider>,
    );
  });
  
  it('Did the modalwindow render fine?', ()=> {
    expect(screen.getAllByRole('dialog')).toHaveLength(1);
  })
})
