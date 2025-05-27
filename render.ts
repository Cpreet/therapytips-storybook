import fs from "fs";
import path from "path";
import { renderToStaticMarkup } from "react-dom/server";
import {
  LandingComp,
  ArticleComp,
  AdviceComp,
  InterviewsComp,
  PersonalityTestsComp,
} from "./src/App";
import ArticleContentPage from "./src/pages/new/ArticleContentPage";
import { getArticles, getAuthor } from "./src/lib/api";

const outDir = "./dist";

// Initialize counters
let htmlFilesCount = 0;
let assetFilesCount = 0;
let totalFilesCount = 0;

console.log("🚀 Starting static site generation...");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
  console.log(`📁 Created output directory: ${outDir}`);
}

const createHtmlFromComponent = (Comp: React.ReactNode) =>
  ("<!DOCTYPE html>" + renderToStaticMarkup(Comp)).replaceAll(
    /(href|src)\s*=\s*(['"])\/home\/charanpreet\/Code\/js\/react\/therapytips-storybook\/src\/(assets\/[^'"]+)\2/g,
    "$1=$2/$3$2"
  );

console.log("📄 Generating main pages...");

fs.writeFileSync(
  path.join(outDir, "index.html"),
  createHtmlFromComponent(LandingComp())
);
htmlFilesCount++;
console.log("✅ Generated index.html");

fs.writeFileSync(
  path.join(outDir, "articles.html"),
  createHtmlFromComponent(ArticleComp())
);
htmlFilesCount++;
console.log("✅ Generated articles.html");

fs.writeFileSync(
  path.join(outDir, "advice.html"),
  createHtmlFromComponent(AdviceComp())
);
htmlFilesCount++;
console.log("✅ Generated advice.html");

fs.writeFileSync(
  path.join(outDir, "interviews.html"),
  createHtmlFromComponent(InterviewsComp())
);
htmlFilesCount++;
console.log("✅ Generated interviews.html");

fs.writeFileSync(
  path.join(outDir, "personality-tests.html"),
  createHtmlFromComponent(PersonalityTestsComp())
);
htmlFilesCount++;
console.log("✅ Generated personality-tests.html");

console.log(`📊 Main pages completed: ${htmlFilesCount} files`);

if (!fs.existsSync(path.join(outDir, "articles"))) {
  fs.mkdirSync(path.join(outDir, "articles"));
}

console.log("📚 Generating article pages...");
const articles = await getArticles({
  article_type: "articles",
  limit: 0,
});

console.log(`📝 Found ${articles.length} articles to process`);

articles.forEach(async (article) => {
  const author = await getAuthor(article.author_id || 1);
  fs.writeFileSync(
    path.join(outDir, `articles/${article.slug}.html`),
    createHtmlFromComponent(
      ArticleContentPage({
        aside: true,
        article,
        author,
      })
    )
  );
  htmlFilesCount++;
  console.log(`✅ Generated article: ${article.slug}.html`);
});

if (!fs.existsSync(path.join(outDir, "interviews"))) {
  fs.mkdirSync(path.join(outDir, "interviews"));
}

console.log("🎤 Generating interview pages...");
const interviews = await getArticles({
  article_type: "interviews",
  limit: 0,
});

console.log(`📝 Found ${interviews.length} interviews to process`);

interviews.forEach(async (interview) => {
  const author = await getAuthor(interview.author_id || 1);
  fs.writeFileSync(
    path.join(outDir, `interviews/${interview.slug}.html`),
    createHtmlFromComponent(
      ArticleContentPage({
        aside: true,
        article: interview,
        author,
      })
    )
  );
  htmlFilesCount++;
  console.log(`✅ Generated interview: ${interview.slug}.html`);
});

if (!fs.existsSync(path.join(outDir, "advice"))) {
  fs.mkdirSync(path.join(outDir, "advice"));
}

console.log("💡 Generating advice pages...");
const advice = await getArticles({
  article_type: "advice",
  limit: 0,
});

console.log(`📝 Found ${advice.length} advice articles to process`);

advice.forEach(async (advice) => {
  const author = await getAuthor(advice.author_id || 1);
  fs.writeFileSync(
    path.join(outDir, `advice/${advice.slug}.html`),
    createHtmlFromComponent(
      ArticleContentPage({
        aside: true,
        article: advice,
        author,
      })
    )
  );
  htmlFilesCount++;
  console.log(`✅ Generated advice: ${advice.slug}.html`);
});

if (!fs.existsSync(path.join(outDir, "personality-tests"))) {
  fs.mkdirSync(path.join(outDir, "personality-tests"));
}

console.log("🧠 Generating personality test pages...");
const personalityTests = await getArticles({
  article_type: "personality-tests",
  limit: 0,
});

console.log(`📝 Found ${personalityTests.length} personality tests to process`);

personalityTests.forEach(async (personalityTest) => {
  const author = await getAuthor(personalityTest.author_id || 1);
  fs.writeFileSync(
    path.join(outDir, `personality-tests/${personalityTest.slug}.html`),
    createHtmlFromComponent(
      ArticleContentPage({
        aside: true,
        article: personalityTest,
        author,
      })
    )
  );
  htmlFilesCount++;
  console.log(`✅ Generated personality test: ${personalityTest.slug}.html`);
});

console.log("🎨 Copying CSS styles...");
const styles = fs.readFileSync(path.join(__dirname, "src/output.css"));
fs.writeFileSync(path.join(outDir, "styles.css"), styles);
assetFilesCount++;
console.log("✅ Copied styles.css");

if (!fs.existsSync(path.join(outDir, "assets"))) {
  fs.mkdirSync(path.join(outDir, "assets"));
}

console.log("🖼️ Copying assets...");
const assets = fs.readdirSync(path.join(__dirname, "src/assets"));

console.log(`📁 Found ${assets.length} assets to copy`);

assets.forEach((asset) => {
  fs.copyFileSync(
    path.join(__dirname, "src/assets", asset),
    path.join(outDir, "assets", asset)
  );
  assetFilesCount++;
  console.log(`✅ Copied asset: ${asset}`);
});

console.log("📂 Copying public files...");
const publicDir = fs.readdirSync(path.join(__dirname, "public"));

console.log(`📁 Found ${publicDir.length} public files to copy`);

publicDir.forEach((asset) => {
  fs.copyFileSync(
    path.join(__dirname, "public", asset),
    path.join(outDir, asset)
  );
  assetFilesCount++;
  console.log(`✅ Copied public file: ${asset}`);
});

console.log("📸 Copying photos...");
const photosDir = fs.readdirSync(path.join(__dirname, "photos"));

if (!fs.existsSync(path.join(outDir, "photos"))) {
  fs.mkdirSync(path.join(outDir, "photos"));
}

console.log(`📁 Found ${photosDir.length} items in photos directory`);

photosDir.forEach((asset) => {
  if (asset.endsWith(".jpg") || asset.endsWith(".png")) {
    fs.copyFileSync(
      path.join(__dirname, "photos", asset),
      path.join(outDir, "photos", asset)
    );
    assetFilesCount++;
    console.log(`✅ Copied photo: ${asset}`);
  }
  if (fs.statSync(path.join(__dirname, "photos", asset)).isDirectory()) {
    if (!fs.existsSync(path.join(outDir, "photos", asset))) {
      fs.mkdirSync(path.join(outDir, "photos", asset));
    }
    const photosSubDir = fs.readdirSync(path.join(__dirname, "photos", asset));
    console.log(
      `📁 Found ${photosSubDir.length} photos in ${asset} subdirectory`
    );
    photosSubDir.forEach((photo) => {
      fs.copyFileSync(
        path.join(__dirname, "photos", asset, photo),
        path.join(outDir, "photos", asset, photo)
      );
      assetFilesCount++;
      console.log(`✅ Copied photo: ${asset}/${photo}`);
    });
  }
});

// Calculate totals
totalFilesCount = htmlFilesCount + assetFilesCount;

console.log("\n🎉 Static site generation completed!");
console.log("📊 File Processing Summary:");
console.log(`   📄 HTML files generated: ${htmlFilesCount}`);
console.log(`   🖼️  Asset files copied: ${assetFilesCount}`);
console.log(`   📁 Total files processed: ${totalFilesCount}`);
console.log(`   📂 Output directory: ${outDir}`);
