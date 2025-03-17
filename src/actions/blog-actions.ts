import { getDatabase } from "@/lib/db";
import { convertObjectIds } from "@/utility/convertObjectId";

export const getAllBlogsAction = async () => {
  try {
    const database = await getDatabase();
    const blogs = await database.collection("Blog").find({}).toArray();
    return convertObjectIds(blogs);
  } catch (error) {
    throw error;
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    const database = await getDatabase();
    const blog = await database.collection("Blog").findOne({ slug: slug });
    return convertObjectIds(blog);
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw error;
  }
};
