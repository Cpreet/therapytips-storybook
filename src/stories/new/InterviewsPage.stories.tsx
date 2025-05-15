import type { Meta, StoryObj } from "@storybook/react"
import InterviewsPage from "@/pages/new/InterviewsPage";

const meta: Meta<typeof InterviewsPage> = {
  title: "pages/new/InterviewsPage",
  component: InterviewsPage,
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
