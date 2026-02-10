import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <Sidebar />
      <main className="ml-68.75 min-h-screen border-r border-x-border max-w-150 w-full">
        {children}
      </main>

    </div>
  );
}
