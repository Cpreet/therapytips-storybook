import type { Meta, StoryObj } from "@storybook/react";

import SectionAdvice from "@/components/new/SectionAdvice";

const meta = {
  title: "components/new/SectionAdvice",
  component: SectionAdvice,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionAdvice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
