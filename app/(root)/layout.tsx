import { Footer } from "@/features/home/footer";
import { Header } from "@/features/home/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Coreco-Editor ",
    default: "Code Editor",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 p-2 min-h-screen">
      <Header />
      <main className="flex-1 flex">
        {children}
      </main>
      <Footer />
    </div>
  );
}
