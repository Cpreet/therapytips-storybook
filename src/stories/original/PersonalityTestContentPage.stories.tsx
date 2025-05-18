import type { Meta, StoryObj } from "@storybook/react";
import PersonalityTestContentPage from "@/pages/original/PersonalityTestContentPage";

const meta: Meta<typeof PersonalityTestContentPage> = {
  title: "Pages/Original/PersonalityTestContentPage",
  component: PersonalityTestContentPage,
};

export default meta;

export const Default: StoryObj<typeof PersonalityTestContentPage> = {};
