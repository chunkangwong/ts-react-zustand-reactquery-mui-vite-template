import type { Meta, StoryObj } from "@storybook/react";

import { SearchBarForm } from "./SearchBarForm";

const meta = {
  title: "Components/SearchBarForm",
  component: SearchBarForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SearchBarForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lastQuery: {
      city: "Johor",
      country: "MY",
    },
    onSearch: ({ city, country }) => {
      alert(`${city}, ${country}`);
    },
  },
};
