import Aside from "@/components/aside";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
      <div className="w-full min-w-0 lg:w-2/3">{children}</div>
      <aside className="w-full lg:w-1/3">
        <Aside id={id} />
      </aside>
    </div>
  );
}
