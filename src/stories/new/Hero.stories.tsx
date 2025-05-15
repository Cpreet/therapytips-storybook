import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/components/new/Hero";

const meta: Meta<typeof Hero> = {
  title: "components/new/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
