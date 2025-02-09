import type { Meta, StoryObj } from "@storybook/react";

import { SearchHistoryItem } from "./SearchHistoryItem";

const meta = {
  title: "Components/SearchHistoryItem",
  component: SearchHistoryItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SearchHistoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchHistoryItem: {
      id: 1,
      city: "Johor",
      country: "MY",
      datetime: new Date().getTime(),
    },
    onDelete: () => null,
    onSearch: () => null,
  },
};
