import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/components/original/Hero";

const meta: Meta<typeof Hero> = {
  title: "components/original/Hero",
  component: Hero,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
