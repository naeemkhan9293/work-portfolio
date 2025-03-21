import Blogs from "@/components/blogs/blogs";
import { getAllBlogsAction } from "@/actions/blog-actions";
import { Blog } from "@/types/blog";

export default async function page() {
  const blogs: Blog[] = await getAllBlogsAction();
  const isBrowser = typeof window !== "undefined";
  return <div>{isBrowser ? <Blogs blogs={blogs} /> : null}</div>;
}
