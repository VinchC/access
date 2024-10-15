import "./globals.css";

import { Metadata } from "next";

const webSiteTitle = "Access";

export const metadata: Metadata = {
  title: {
    template: `%s | ${webSiteTitle}`,
    default: webSiteTitle,
  },
  description:
    "A page to work on good practices regarding the topic of web accessibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p>Pops (Root layout content)</p>
        {children}
      </body>
    </html>
  );
}
