import type { Meta, StoryObj } from "@storybook/react";
import ArticlePage from "@/pages/original/ArticlePage";

const meta: Meta<typeof ArticlePage> = {
  title: "pages/original/ArticlePage",
  component: ArticlePage,
  parameters: {
    layout: "center",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aside: false,
  },
};
