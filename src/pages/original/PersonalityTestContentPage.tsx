import Header from "@/components/original/Header";
import AboutAuthor from "@/components/original/AboutAuthor";
import AsideVideos from "@/components/original/AsideVideos";
import AsideArticles from "@/components/original/AsideArticles";
import Footer from "@/components/original/Footer";
import ArticleMain from "@/components/original/ArticleMain";
import PersonalityTestQuestions from "@/components/original/PeronalityTestQuestions";

const PersonalityTestContentPage = () => {
  return (
    <>
      <div className="flex flex-col md:w-[940px] md:mx-auto m-2 rounded-lg bg-white">
        <Header />
        <main className="flex flex-col font-(family-name:--font-crimson) px-4 py-2 space-y-4">
          <ArticleMain />
          <PersonalityTestQuestions />
          <AboutAuthor />
          <AsideArticles />
          <AsideVideos />
        </main>
        <Footer />
      </div>
      <p className="font-(family-name:--font-crimson) text-sm text-center py-2 font-semibold tracking-tight">
        © Psychology Solutions 2025. All Rights Reserved.
      </p>
    </>
  );
};

export default PersonalityTestContentPage;
