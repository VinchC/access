import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p>Pops (layout content)</p>
        {children}
      </body>
    </html>
  );
}
