import type { Meta, StoryObj } from "@storybook/react";
import LandingPage from "../pages/LandingPage";

const meta: Meta<typeof LandingPage> = {
  title: "pages/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
