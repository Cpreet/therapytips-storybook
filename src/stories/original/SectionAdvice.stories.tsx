import type { Meta, StoryObj } from "@storybook/react";

import SectionAdvice from "@/components/original/SectionAdvice";

const meta = {
  title: "components/original/SectionAdvice",
  component: SectionAdvice,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionAdvice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
