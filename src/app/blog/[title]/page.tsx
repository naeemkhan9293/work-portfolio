import { getBlogBySlug } from "@/actions/blog-actions";
import Blog from "@/components/blogs/blog";
import { Blog as BlogTypes } from "@/types/blog";

export default async function page({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const blog: BlogTypes = await getBlogBySlug(title);
  return (
    <div className="pt-20">
      <Blog blog={blog} />
    </div>
  );
}
