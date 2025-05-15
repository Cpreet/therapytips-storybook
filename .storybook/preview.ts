import type { Preview } from "@storybook/react";
import "../src/output.css";
import { background } from "storybook/internal/theming";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "mauve", value: "color-mix(in srgb, var(--therapy-tips)15%, transparent);" },
        { name: "baby-blue", value: "var(--color-blue-50);" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
};

export default preview;
