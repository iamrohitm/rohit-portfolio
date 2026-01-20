import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * SEO-Optimized Metadata for Rohit Mohite Portfolio
 *
 * This metadata configuration includes:
 * - Title and description with relevant keywords
 * - Open Graph tags for social media sharing
 * - Twitter Card tags
 * - Canonical URL
 * - Structured data for enhanced search visibility
 */
export const metadata: Metadata = {
  title: "Rohit Mohite - Full Stack Developer",
  description:
    "Rohit Mohite - Full Stack Developer specializing in MERN stack, React, Java, and SQL. Building dynamic web experiences with modern technologies. Available for opportunities.",
  keywords: [
    "Rohit Mohite",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "Web Developer",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "SQL",
    "Python",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Rohit Mohite" }],
  creator: "Rohit Mohite",
  publisher: "Rohit Mohite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohitmohite.dev",
    title: "Rohit Mohite | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React, Java, and SQL. Building dynamic web experiences with modern technologies.",
    siteName: "Rohit Mohite Portfolio",
    images: [
      {
        url: "/og-image.png", // Placeholder - replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Rohit Mohite - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Mohite - Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React, Java, and SQL. Building dynamic web experiences.",
    site: "@rohitmohite", // Placeholder - replace with actual Twitter handle
    creator: "@rohitmohite",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect fill='%230ea5e9' width='180' height='180' rx='40'/><text x='50%' y='50%' font-size='100' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='monospace'>&lt;/&gt;</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect fill='%230ea5e9' width='180' height='180' rx='40'/><text x='50%' y='50%' font-size='100' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='white' font-family='monospace'>&lt;/&gt;</text></svg>",
  },
  manifest: "/manifest.json",
  category: "Technology",
  metadataBase: new URL("https://rohitmohite.dev"), // Replace with actual URL
  alternates: {
    canonical: "/",
  },
};

/**
 * RootLayout Component
 *
 * This layout provides:
 * - Responsive viewport settings
 * - Theme-aware color scheme support
 * - Font configurations with Google Fonts
 * - Proper semantic HTML structure
 * - Accessibility features (antialiased text, reduced motion support)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Additional meta tags for enhanced SEO and accessibility */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rohit Mohite" />

        {/* Structured Data for Person (Software Developer) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rohit Mohite",
              givenName: "Rohit",
              familyName: "Mohite",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in MERN stack, Java, and modern web technologies. Passionate about building dynamic web experiences.",
              url: "https://rohitmohite.dev",
              image: "https://rohitmohite.dev/profile.jpg", // Replace with actual image
              sameAs: [
                "https://github.com/rohitmohite",
                "https://linkedin.com/in/rohitmohite",
                "https://twitter.com/rohitmohite", // Replace with actual Twitter handle
              ],
              knowsAbout: [
                "React",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Java",
                "SQL",
                "Python",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "Git",
                "Full Stack Development",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Savitribai Phule Pune University (SPPU)",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
              educationalCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Bachelor Degree",
                  name: "B.E. in Computer Engineering",
                  educationalLevel: "Undergraduate",
                },
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance", // Update when employed
              },
            }),
          }}
        />

        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rohit Mohite Portfolio",
              url: "https://rohitmohite.dev",
              description:
                "Portfolio of Rohit Mohite - Full Stack Developer specializing in MERN stack, React, Java, and SQL",
              inLanguage: "en",
              publisher: {
                "@type": "Person",
                name: "Rohit Mohite",
                url: "https://rohitmohite.dev",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://rohitmohite.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
