const API_URL = "http://localhost:4000/api";

export interface Author {
  id?: number;
  name: string;
  bio?: string;
  image_url?: string;
  created_at?: string;
}

export interface Category {
  id?: number;
  name: string;
  slug: string;
  created_at?: string;
}

export interface Article {
  id?: number;
  title: string;
  subtitle?: string;
  slug: string;
  content: string;
  article_type: "advice" | "interviews" | "articles" | "personality-tests";
  author_id?: number;
  publication_date?: string;
  modified_date?: string;
  canonical_url?: string;
  hero_image_url?: string;
  hero_image_alt?: string;
  meta_description?: string;
  created_at?: string;
}

export interface ArticleCategory {
  id?: number;
  article_id: number;
  category_id: number;
  created_at?: string;
}

export interface Image {
  id?: number;
  filename: string;
  url: string;
  alt_text?: string;
  aspect_ratio?: string;
  width?: number;
  height?: number;
  created_at?: string;
}

export interface TestQuestion {
  id?: number;
  article_id: number;
  question_text: string;
  question_order: number;
  options?: string; // JSON array of options
  created_at?: string;
}

export interface ArticleWithDetails extends Article {
  author?: Author;
  categories?: Category[];
  test_questions?: TestQuestion[];
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface SearchParams extends PaginationParams {
  query?: string;
  article_type?: string;
  category?: string;
  author_id?: number;
  date_from?: string; // ISO date string (YYYY-MM-DD)
  date_to?: string; // ISO date string (YYYY-MM-DD)
  year?: string; // Filter by specific year (YYYY)
  month?: string; // Filter by specific month (YYYY-MM)
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const getArticles = async (
  params?: SearchParams
): Promise<Article[]> => {
  const getArticlesUrl = new URL(`${API_URL}/articles`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      getArticlesUrl.searchParams.set(key, value);
    });
  }
  const response = await fetch(getArticlesUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (!response.success) {
    throw new Error(response.message || "Failed to fetch articles");
  }

  return response.data;
};

export const getArticle = async (slug: string): Promise<Article> => {
  const response = await fetch(`${API_URL}/articles/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (!response.success) {
    throw new Error(response.message || "Failed to fetch article");
  }

  return response.data;
};

export const getAuthor = async (author_id: number): Promise<Author> => {
  const response = await fetch(`${API_URL}/authors/${author_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (!response.success) {
    throw new Error(response.message || "Failed to fetch author");
  }

  return response.data;
};
