import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor F. Santos",
  applicationName: "Victor F. Santos - Frontend Engineer",
  description: "Bridging the gap between UX and Frontend engineering.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Victor F. Santos",
    "Victor Frontend",
    "Victor React",
    "Victor Next.js",
    "frontend engineer",
    "frontend developer",
    "frontend",
  ],
  openGraph: {
    images: "/metadata/thumbnail.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
