import type { Meta, StoryObj } from "@storybook/react";

import Chart from "./component";
import intradayHistory from "../stubs/intraday-history-one-day";

const meta: Meta<typeof Chart> = {
  component: Chart,
  argTypes: {
    sliceEnd: {
      control: "range",
      name: "Slice End Index",
      description: "Dynamically set the end index for slicing data",
    },
  } as any,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IntradayMondayAtClose: Story = {
  args: {
    data: intradayHistory,
    range: 1,
  },

  render: (args) => {
    const slicedData = args.data?.slice(0, (args as any).sliceEnd || 1);
    return <Chart {...args} data={slicedData} />;
  },
};
