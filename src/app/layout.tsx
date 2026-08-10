import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yelwinsoe.dev"),
  applicationName: "Ye Lwin Soe — Software Engineering Portfolio",
  title: "Ye Lwin Soe | Senior Full-Stack Software Engineer",
  description:
    "Auckland-based senior full-stack software engineer with 11+ years of experience delivering React, TypeScript, Python, and cloud platforms.",
  openGraph: {
    title: "Ye Lwin Soe | Senior Full-Stack Software Engineer",
    description:
      "11+ years delivering React, TypeScript, Python, and cloud platforms across investment, recruitment, and media.",
    url: "https://yelwinsoe.dev",
    siteName: "Ye Lwin Soe",
    type: "website",
    locale: "en_NZ",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ye Lwin Soe — Senior Full-Stack Software Engineer in Auckland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ye Lwin Soe | Senior Full-Stack Software Engineer",
    description:
      "Auckland-based senior engineer with 11+ years delivering React, TypeScript, Python, and cloud platforms.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://yelwinsoe.dev",
  },
  authors: [{ name: "Ye Lwin Soe", url: "https://yelwinsoe.dev" }],
  creator: "Ye Lwin Soe",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "full-stack software engineer",
    "React developer",
    "Python developer",
    "Auckland software engineer",
    "senior software engineer",
    "technical lead",
    "New Zealand software engineer",
    "Auckland technical lead",
  ],
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ye Lwin Soe",
  url: "https://yelwinsoe.dev",
  image: "https://yelwinsoe.dev/profile.jpeg",
  jobTitle: "Senior Full-Stack Software Engineer",
  email: "mailto:yelwinsoe.mm@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "NZ",
  },
  sameAs: [
    "https://www.linkedin.com/in/yelwinsoe",
    "https://github.com/yelwinsoe",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Auckland University of Technology",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of East London",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Computer Studies, Mandalay",
    },
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Python",
    "Node.js",
    "Cloud infrastructure",
    "Technical leadership",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
