import React from "react";
import { render } from "@testing-library/react";
import LibButton from './lib-button';
import { ILibButtomProps } from './lib-button.types';

describe("Lib Button", () => {
  let props: ILibButtomProps;

  beforeEach(() => {
    props = {
      children: 'Test text'
    };
  });

  const renderComponent = () => render(<LibButton {...props} />);

  it("should contain Test text", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('lib-button');

    expect(component).toHaveTextContent('Test text');
  });
});