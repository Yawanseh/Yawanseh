import Aside from "@/components/aside";

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  return (
    <div className="container mx-auto flex flex-wrap">
      <div className="w-full xl:w-2/3 flex flex-col items-center">
        {children}
      </div>
      <aside className="w-full xl:w-1/3 flex flex-col items-center xl:pl-4 xl:pt-0 pt-4">
        <Aside id={params.id} />
      </aside>
    </div>
  );
}
