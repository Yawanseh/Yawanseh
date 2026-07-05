import Banner from "@/components/banner";
import JsonLd from "@/components/json-ld";
import GridLayout from "@/components/layout/grid-layout";
import { getAllPosts } from "@/lib/api";
import { websiteSchema } from "@/lib/seo";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Banner />
      <GridLayout posts={posts} />
    </>
  );
}
