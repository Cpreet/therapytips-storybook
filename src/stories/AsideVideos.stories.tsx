import type { Meta, StoryObj } from "@storybook/react";
import AsideVideos from "../components/AsideVideos";

const meta: Meta<typeof AsideVideos> = {
  title: "components/AsideVideos",
  component: AsideVideos,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AsideVideos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
