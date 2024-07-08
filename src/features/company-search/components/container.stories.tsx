import type { Meta, StoryObj } from "@storybook/react";

import Search from "./container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Search> = {
  component: Search,
  args: {
    initialValue: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const client = new QueryClient();

export const Default: Story = {
  args: {
    initialValue: "AAPL",
  },
  render: ({ initialValue }) => (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Search initialValue={initialValue} />
      </QueryClientProvider>
    </BrowserRouter>
  ),
};
