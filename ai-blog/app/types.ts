import { Post } from "@prisma/client";

export type SocialLinksProps = {
  isDark: boolean;
}

export type TrendingCardProps = {
  className?: string;
  post: Post
}

export type TrendingProps = {
  trendingPosts: Array<Post>;
}

export type TravelProps = {
  travelPosts: Array<Post>;
}

export type OtherProps = {
  otherPosts: Array<Post>;
}

export type TechProps = {
  techPosts: Array<Post>;
}

export type AllPurposeItemProps = {
  className?: string;
  post: Post;
  imageHeight: string;
  isSmallItem?: boolean;
  isLongForm?: boolean;
}

export type FormattedPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  category: string;
  content: string;
  author: string;
  image: string;
  snippet: string;
}