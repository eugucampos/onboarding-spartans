import type { Metadata, Viewport } from "next";
import { Work_Sans, Sora } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Spartans - Influencer Onboarding",
  description: "Welcome to the Spartans Creator Program. Everything you need to get started.",
  icons: { icon: "https://spartans.com/icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#002938",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
