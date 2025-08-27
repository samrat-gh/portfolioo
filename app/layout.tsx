import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  // variants: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Samrat Ghimire | Full Stack Developer | NextJS , TypeScript, Express, MongoDB, React",
  description:
    "Experienced Frontend Engineer specializing in Next.js, TypeScript, and UI/UX design. Passionate about building scalable, high-performance web applications. Explore my projects and skills",
  icons: {
    icon: "/favicon/favicon.ico", // Default icon for browser tabs.
    shortcut: "/favicon/favicon-16x16.png", // Alternative small PNG favicon for compatibility.
    apple: "/favicon/apple-touch-icon.png", // Icon used when the site is saved to the home screen on Apple devices.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a192f] scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-primary min-h-screen text-white font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
