import type { Meta, StoryObj } from "@storybook/react"
import AdvicePage from "@/pages/new/AdvicePage";

const meta: Meta<typeof AdvicePage> = {
  title: "pages/new/AdvicePage",
  component: AdvicePage,
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
