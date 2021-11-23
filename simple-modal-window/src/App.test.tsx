import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from './store/index';


describe("App", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('Did the button render fine?', ()=> {
    expect(screen.getAllByRole('button')).toHaveLength(2);
  })
  it('Did the modalwindow render fine?', ()=> {
    expect(screen.getAllByRole('dialog')).toHaveLength(1);
  })
})
