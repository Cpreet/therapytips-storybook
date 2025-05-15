import type { Meta, StoryObj } from "@storybook/react";
import AsideVideos from "@/components/new/AsideVideos";

const meta: Meta<typeof AsideVideos> = {
  title: "components/new/AsideVideos",
  component: AsideVideos,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AsideVideos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
