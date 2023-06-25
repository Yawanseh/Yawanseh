import Banner from "@/components/banner";
import GridLayout from "@/components/layout/grid-layout";
import { getAllPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <Banner />
      <GridLayout posts={posts} />
    </>
  );
}
