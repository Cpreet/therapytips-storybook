import fs from "fs";
import path from "path";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./src/App";

const outDir = "./dist";

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const app = renderToStaticMarkup(App());
const indexHtml = "<!DOCTYPE html>" + app;
const regex =
  /(href|src)\s*=\s*(['"])\/home\/charanpreet\/Code\/js\/react\/therapytips-storybook\/src\/(assets\/[^'"]+)\2/g;
const newHtml = indexHtml.replace(regex, "$1=$2./$3$2");
// indexHtml = indexHtml.replaceAll(/="(.*?)\/assets\/(.*?)"/gm, '="./assets/$2"');

fs.writeFileSync(path.join(outDir, "index.html"), newHtml);

if (!fs.existsSync(path.join(outDir, "assets"))) {
  fs.mkdirSync(path.join(outDir, "assets"));
}

const styles = fs.readFileSync(path.join(__dirname, "src/output.css"));
fs.writeFileSync(path.join(outDir, "styles.css"), styles);

const assets = fs.readdirSync(path.join(__dirname, "src/assets"));

assets.forEach((asset) => {
  fs.copyFileSync(
    path.join(__dirname, "src/assets", asset),
    path.join(outDir, "assets", asset)
  );
});

const publicDir = fs.readdirSync(path.join(__dirname, "public"));

publicDir.forEach((asset) => {
  fs.copyFileSync(
    path.join(__dirname, "public", asset),
    path.join(outDir, asset)
  );
});
