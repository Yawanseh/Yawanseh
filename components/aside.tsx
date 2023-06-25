import { getPostById } from "@/lib/api";

const Aside = async ({ id }: { id: string }): Promise<JSX.Element> => {
  const { title, description, tags } = await getPostById(id);

  return (
    <div className="card bg-gradient-to-tr from-base-300 to-base-300 transition border border-base-content/30 w-full">
      <div className="card-body">
        <h2 className="card-title font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-b from-base-content to-base-content/70">
          {title}
        </h2>
        <p className="text-base-content/70">{description}</p>
        <div className="flex flex-wrap">
          {tags?.map((tag: string) => (
            <div key={`${id}-${tag}`} className="badge badge-outline mr-2 mt-2">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aside;
