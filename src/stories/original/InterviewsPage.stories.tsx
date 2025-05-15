import type { Meta, StoryObj } from "@storybook/react"
import InterviewsPage from "@/pages/original/InterviewsPage";

const meta: Meta<typeof InterviewsPage> = {
  title: "pages/original/InterviewsPage",
  component: InterviewsPage,
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
