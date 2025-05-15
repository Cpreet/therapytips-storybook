import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  theme,
  toolbar: {
    zoom: {
      hidden: true,
    },
  },
}); 