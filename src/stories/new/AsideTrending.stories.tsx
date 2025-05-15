import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import AsideTrending from "@/components/new/AsideTrending";

const meta: Meta<typeof AsideTrending> = {
  title: "components/new/AsideTrending",
  component: AsideTrending,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AsideTrending>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
