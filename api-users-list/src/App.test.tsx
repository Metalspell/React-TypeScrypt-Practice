import React from "react";
import axios from "axios";
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

/*
Search variants:
  getBy:                    queryby:                    findBy:
- getByText               - queryByText               - findByText
- getByRole               - queryByRole               - findByRole
- getByLabelText          - queryByLabelText          - findByLabelText
- getByPlaceholderText    - queryByPlaceholderText    - findByPlaceholderText
- getByAltText            - queryByAltText            - findByAltText
- getByDisplayValue       - queryByDisplayValue       - findByDisplayValue
- getAllBy                - queryAllBy                - findAllBy
*/

/*
Assertive Functions:
- toBeDisabled            - toBeEnabled               - toBeEmpty
- toBeEmptyDOMElement     - toBeInTheDocument         - toBeInvalid
- toBeRequired            - toBeValid                 - toBeVisible
- toContainElement        - toContainHTML             - toHaveAttribute
- toHaveClass             - toHaveFocus               - toHaveFormValues
- toHaveStyle             - toHaveTextContent         - toHaveValue
- toHaveDisplayValue      - toBeChecked               - toBePartiallyChecked
- toHaveDescription
*/

jest.mock('axios');

describe('App', () => {
  // let originFetch:originFetch[] = [];
  // beforeEach(() => {
  //   originFetch = (global as any).fetch;
  // });
  // afterEach(() => {
  //   (global as any).fetch = originFetch;
  // });
  it('should pass', async () => {
    const fakeResponse = { title: 'example text' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    const { getByTestId } = render(<App></App>);
    const div = await waitForElement(() => getByTestId('test'));
    expect(div).toHaveTextContent('example text');
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});