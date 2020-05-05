import React from "react";
import SnkButton from './snk-button';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SnkThemeProvider from '../snk-theme-provider/snk-theme-provider';

const theme = {
  borderRadius: '.4rem',
  primaryAccent: 'darkorange',
  secondaryAccent: '#181818',
  primaryColor: '#fff',
  secondaryColor: '#fff',
  mainBg: '#fff'
};

storiesOf("SnkButton", module)
  .add("primary", withInfo(`
    This lib button description
  `)(() => {
    return (
      <SnkThemeProvider theme={theme}>
        <SnkButton
          isDisabled={boolean("isDisabled", false)}
          isLoading={boolean("isLoading", false)}
          onClick={() => console.log('click')}
        >
          {text("children", "Hello Storybook")}
        </SnkButton>
      </SnkThemeProvider>
    )
  }))
  .addDecorator(withKnobs)
