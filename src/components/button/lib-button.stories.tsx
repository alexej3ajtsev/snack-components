import React from "react";
import LibButton from './lib-button';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("LibButton", module)
  .add("primary", withInfo(`
    This lib button description
  `)(() => {
    return (
      <LibButton
        isDisabled={boolean("isDisabled", false)}
        isLoading={boolean("isLoading", false)}
        onCLick={() => console.log('click')}
      >
        {text("children", "Hello Storybook")}
      </LibButton>
    )
  }))
  .addDecorator(withKnobs)
