import type { Meta, StoryObj } from "@storybook/react";
import Header from "@/components/original/Header";

const meta: Meta<typeof Header> = {
  title: "components/original/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
