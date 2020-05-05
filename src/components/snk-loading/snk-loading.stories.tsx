import React from "react";
import SnkLoading from './snk-loading';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

storiesOf("SnkLoading", module)
  .add("primary", withInfo(`
    This lib button description
  `)(() => {
    return (
      <SnkLoading />
    )
  }))
  .addDecorator(withKnobs)
