import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import SectionArticles from "@/components/new/SectionArticles";

const meta: Meta<typeof SectionArticles> = {
  title: "components/new/SectionArticles",
  component: SectionArticles,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SectionArticles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
