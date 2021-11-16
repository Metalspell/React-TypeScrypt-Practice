import { render, screen, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { waitFor } from "@testing-library/react";

describe("App", () => {
  beforeEach(() => {
    render(
      <App />,
    );
  });

  it('Headitems render fine', () => {
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  })

  it("do we have tabpanel?", () => {
    const tabList  = screen.getByRole('tablist')
    expect(tabList).toBeInTheDocument();
  });

  it("do we have active tab?", () => {
    const getById = queryByAttribute.bind(null, 'id');
    const dom = render(<App />);
    const activeTab  = getById(dom.container, '0');
    expect(activeTab).toHaveClass('primary');
  });

  it("do we have content in output?", () => {
    const content  = document.querySelector('.content-item');
    expect(content).toHaveClass('active');
  });
});