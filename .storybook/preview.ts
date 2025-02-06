import type { Preview } from "@storybook/react";
import { fn } from "@storybook/test";

const preview: Preview = {
  parameters: {
    actions: {
      args: {
        onClick: fn(),
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
