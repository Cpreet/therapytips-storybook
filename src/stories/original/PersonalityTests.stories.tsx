import type { Meta, StoryObj } from "@storybook/react"
import PersonalityTestsPage from "@/pages/original/PersonalityTestsPage";

const meta: Meta<typeof PersonalityTestsPage> = {
  title: "pages/original/PersonalityTestsPage",
  component: PersonalityTestsPage,
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
