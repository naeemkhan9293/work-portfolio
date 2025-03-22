import Blogs from "@/components/blogs/blogs";
import { getAllBlogsAction } from "@/actions/blog-actions";
import { Blog } from "@/types/blog";

export default async function page() {
  const blogs: Blog[] = await getAllBlogsAction();
  return (
    <div>
      <Blogs blogs={blogs} />{" "}
    </div>
  );
}
