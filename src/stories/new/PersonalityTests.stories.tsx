import type { Meta, StoryObj } from "@storybook/react"
import PersonalityTestsPage from "@/pages/new/PersonalityTestsPage";

const meta: Meta<typeof PersonalityTestsPage> = {
  title: "pages/new/PersonalityTestsPage",
  component: PersonalityTestsPage,
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
