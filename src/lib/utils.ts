import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { marked } from "marked";
import DOMPurify from "dompurify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function markdownToSanitizedHtml(markdown: string): string {
  // Parse markdown to HTML
  const rawHtml = marked(markdown, { async: false });

  if (typeof window === "undefined") {
    const { JSDOM } = require("jsdom"); // eslint-disable-line @typescript-eslint/no-require-imports
    const window = new JSDOM("").window;
    const DOMPurifyInstance = DOMPurify(window);
    const sanitizedHtml = DOMPurifyInstance.sanitize(rawHtml, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "em",
        "u",
        "s",
        "del",
        "ins",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "blockquote",
        "pre",
        "code",
        "a",
        "img",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "hr",
      ],
      ALLOWED_ATTR: [
        "href",
        "title",
        "alt",
        "src",
        "width",
        "height",
        "class",
        "id",
      ],
      ALLOW_DATA_ATTR: false,
    });

    return sanitizedHtml;
  }

  // Sanitize the HTML to prevent XSS attacks
  const sanitizedHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "s",
      "del",
      "ins",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "hr",
    ],
    ALLOWED_ATTR: [
      "href",
      "title",
      "alt",
      "src",
      "width",
      "height",
      "class",
      "id",
    ],
    ALLOW_DATA_ATTR: false,
  });

  return sanitizedHtml;
}

export type NoembedResponse = {
  version: string;
  thumbnail_height: number;
  url: string;
  html: string;
  height: number;
  type: string;
  provider_url: string;
  title: string;
  author_url: string;
  author_name: string;
  thumbnail_url: string;
  provider_name: string;
  width: number;
  thumbnail_width: number;
};

export const videoData = async (videoUrl: string) => {
  const noEmbedUrl = `https://noembed.com/embed?url=${encodeURIComponent(
    videoUrl
  )}`;
  return await fetch(noEmbedUrl)
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error fetching video data:", err);
      return null;
    });
};
