import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard page",
  description:
    "A page to work on a dashboard.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <p>Dashboard (DashboardLayout content)</p>
      {children}
    </section>
  );
}
