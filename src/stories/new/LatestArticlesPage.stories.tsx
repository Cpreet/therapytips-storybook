import type { Meta, StoryObj } from "@storybook/react"
import LatestArticlesPage from "@/pages/new/LatestArticlesPage"

const meta: Meta<typeof LatestArticlesPage> = {
  title: "pages/new/LatestArticlesPage",
  component: LatestArticlesPage,
  parameters: {
    layout: "center"
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aside: true 
  }
};

export const WithoutAside: Story = {
  args: {
    aside: false
  }
}
