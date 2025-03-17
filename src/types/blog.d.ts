export interface Blog {
  _id: string;
  title: string;
  slug: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  publishDate: string;
  content: string;
  isPublish: boolean;
  createdAt: string;
  updatedAt: string;
}
