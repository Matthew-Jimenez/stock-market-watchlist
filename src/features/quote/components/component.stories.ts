import type { Meta, StoryObj } from "@storybook/react";

import Quote from "./component";

const meta: Meta<typeof Quote> = {
  component: Quote,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: 123.45,
  },
};

export const Loading: Story = {
  args: {},
};
