import React from "react";
import { render } from "@testing-library/react";
import SnkButton from './snk-button';
import { ISnkButtonProps } from './snk-button.types';

describe("Snack Button", () => {
  let props: ISnkButtonProps;

  beforeEach(() => {
    props = {
      children: 'Test text',
      onClick: () => {
        console.log('dummy click');
      }
    };
  });

  const renderComponent = () => render(<SnkButton {...props} />);

  it("should contain Test text", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('snk-button');
    expect(component).toHaveTextContent('Test text');
  });
});