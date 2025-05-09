import type { Meta, StoryObj } from "@storybook/react";
import CTA from "../components/CTA";

const meta: Meta<typeof CTA> = {
  title: "components/CTA",
  component: CTA,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CTA>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
