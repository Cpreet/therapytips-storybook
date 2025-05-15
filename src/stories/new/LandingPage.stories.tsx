import type { Meta, StoryObj } from "@storybook/react";
import LandingPage from "@/pages/original/LandingPage";

const meta: Meta<typeof LandingPage> = {
  title: "pages/new/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
