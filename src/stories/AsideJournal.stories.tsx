import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import AsideJournal from "../components/AsideJournal";

const meta: Meta<typeof AsideJournal> = {
  title: "components/AsideJournal",
  component: AsideJournal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AsideJournal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
