export interface AuthorData {
  image: string;
  username: string;
  following: boolean;
}

export interface ArticleData {
  favorited: boolean;
  author: AuthorData;
  tagList: string[];
  title: string;
  description: string;
  createdAt: string;
  favoritesCount: number;
  slug: string;
}

export interface CommentData {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: AuthorData;
}
