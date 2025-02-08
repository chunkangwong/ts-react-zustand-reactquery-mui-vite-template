import type { Meta, StoryObj } from "@storybook/react";

import { SearchHistoryList } from "./SearchHistoryList";

const meta = {
  title: "Components/SearchHistoryList",
  component: SearchHistoryList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SearchHistoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchHistoryItems: [
      {
        id: 1,
        city: "Johor",
        country: "MY",
        datetime: new Date().getTime(),
      },
      {
        id: 2,
        city: "Woodlands",
        country: "SG",
        datetime: new Date().getTime(),
      },
      {
        id: 3,
        city: "Penang",
        country: "MY",
        datetime: new Date().getTime(),
      },
    ],
    onDelete: () => null,
    onDeleteAll: () => null,
    onSearch: () => null,
  },
};
