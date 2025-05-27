import LandingPage from "./pages/new/LandingPage";
import LatestArticlesPage from "./pages/new/LatestArticlesPage";
import AdvicePage from "./pages/new/AdvicePage";
import InterviewsPage from "./pages/new/InterviewsPage";
import PersonalityTestsPage from "./pages/new/PersonalityTestsPage";
import Layout from "./components/new/Layout";
import BaseHead from "./components/new/BaseHead";
import ArticleContentPage from "./pages/new/ArticleContentPage";
import type { Article } from "./lib/api";
import type { Author } from "./lib/api";

export const LandingComp = () => {
  return (
    <Layout headData={<BaseHead />}>
      <LandingPage />
    </Layout>
  );
};

export const ArticleComp = () => (
  <Layout headData={<BaseHead />}>
    <LatestArticlesPage aside={true} />
  </Layout>
);

export const AdviceComp = () => (
  <Layout headData={<BaseHead />}>
    <AdvicePage aside={true} />
  </Layout>
);

export const InterviewsComp = () => (
  <Layout headData={<BaseHead />}>
    <InterviewsPage aside={true} />
  </Layout>
);

export const PersonalityTestsComp = () => (
  <Layout headData={<BaseHead />}>
    <PersonalityTestsPage aside={true} />
  </Layout>
);

export const ArticleContentComp = ({
  article,
  author,
}: {
  article: Article;
  author: Author;
}) => (
  <Layout headData={<BaseHead />}>
    <ArticleContentPage aside={true} article={article} author={author} />
  </Layout>
);
