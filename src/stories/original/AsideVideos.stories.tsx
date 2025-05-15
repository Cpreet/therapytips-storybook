import type { Meta, StoryObj } from "@storybook/react";
import AsideVideos from "@/components/original/AsideVideos";

const meta: Meta<typeof AsideVideos> = {
  title: "components/original/AsideVideos",
  component: AsideVideos,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AsideVideos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
