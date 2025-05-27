import { type Meta, type StoryObj } from "@storybook/react";

import ArticleContentPage from "@/pages/new/ArticleContentPage";
import { getArticle, getAuthor } from "@/lib/api";

const meta: Meta<typeof ArticleContentPage> = {
  title: "pages/new/ArticleContentPage",
  component: ArticleContentPage,
};

const article = await getArticle(
  "5-signs-your-relationship-is-functional-yet-loveless"
);

const author = await getAuthor(article?.author_id || 1);

export default meta;

export const Default: StoryObj<typeof ArticleContentPage> = {
  args: {
    aside: true,
    article,
    author,
  },
};
