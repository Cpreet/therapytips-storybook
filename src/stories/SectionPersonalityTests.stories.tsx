import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import SectionPersonalityTests from "../components/SectionPersonalityTests";

const meta: Meta<typeof SectionPersonalityTests> = {
  title: "components/SectionPersonalityTests",
  component: SectionPersonalityTests,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionPersonalityTests>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
