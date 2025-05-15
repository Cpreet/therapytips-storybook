import type { Meta, StoryObj } from "@storybook/react"
import LatestArticlesPage from "@/pages/original/LatestArticlesPage"

const meta: Meta<typeof LatestArticlesPage> = {
  title: "pages/original/LatestArticlesPage",
  component: LatestArticlesPage,
  parameters: {
    layout: "center"
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aside: false 
  }
};

export const WithAside: Story = {
  args: {
    aside: true
  }
}
