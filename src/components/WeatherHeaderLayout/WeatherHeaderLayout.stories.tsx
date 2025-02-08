import type { Meta, StoryObj } from "@storybook/react";

import { WeatherHeaderLayout } from "./WeatherHeaderLayout";

const meta = {
  title: "Components/WeatherHeaderLayout",
  component: WeatherHeaderLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof WeatherHeaderLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    weatherData: {
      datetime: new Date().getTime(),
      main: {
        humidity: 58,
        temp: 26,
        temp_max: 29,
        temp_min: 26,
      },
      name: "Johor",
      sys: {
        country: "MY",
      },
      weather: [{ main: "Clouds" }],
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    weatherData: {
      datetime: new Date().getTime(),
      main: {
        humidity: 58,
        temp: 26,
        temp_max: 29,
        temp_min: 26,
      },
      name: "Johor",
      sys: {
        country: "MY",
      },
      weather: [{ main: "Clouds" }],
    },
  },
};
