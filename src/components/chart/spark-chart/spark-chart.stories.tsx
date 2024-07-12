import type { Meta, StoryObj } from "@storybook/react";

import Chart from "./spark-chart.component";
import oneDayHistory from "test-utils/fixtures/history/oneDay";

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
    data: oneDayHistory,
    range: 1,
  },

  render: (args) => {
    const slicedData = args.data?.slice(0, (args as any)?.sliceEnd ?? 20);
    return <Chart {...args} data={slicedData} />;
  },
};
