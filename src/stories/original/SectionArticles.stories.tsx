import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import SectionArticles from "@/components/original/SectionArticles";

const meta: Meta<typeof SectionArticles> = {
  title: "components/original/SectionArticles",
  component: SectionArticles,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionArticles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
