import SectionInterviews from "../components/SectionInterviews";
import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

const meta: Meta<typeof SectionInterviews> = {
  title: "components/SectionInterviews",
  component: SectionInterviews,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionInterviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
