import type { Meta, StoryObj } from "@storybook/react"
import AdvicePage from "@/pages/original/AdvicePage";

const meta: Meta<typeof AdvicePage> = {
  title: "pages/original/AdvicePage",
  component: AdvicePage,
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
