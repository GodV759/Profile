import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
export const metadata: Metadata = {
  title: "Haladie",
  description: "Profile of Haladie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex flex-col items-center px-4">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageAnimatePresence>
            {children}
            <SpeedInsights />
          </PageAnimatePresence>
          <Nav />
        </ThemeProvider>
      </body>
    </html>
  );
}
