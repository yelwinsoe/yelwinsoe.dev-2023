import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ye Lwin Soe — Senior Full-Stack Developer",
  description:
    "Senior full-stack developer with 11 years of experience building React and Python web applications. Available for remote contract work, 25 hours per week.",
  openGraph: {
    title: "Ye Lwin Soe — Senior Full-Stack Developer",
    description:
      "11 years building React & Python web apps across fintech, recruitment, and media. Available for remote part-time contract.",
    url: "https://yelwinsoe.dev",
    siteName: "Ye Lwin Soe",
    type: "website",
  },
  keywords: [
    "full-stack developer",
    "React developer",
    "Python developer",
    "remote contractor",
    "senior software engineer",
    "freelance developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
