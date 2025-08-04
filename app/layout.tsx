import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../utils/StyledComponentsRegistry';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Your Finance Business Partner | Global Financial Services",
  description: "Professional financial services with global expertise. Investment strategies, portfolio management, retirement planning, and risk management solutions tailored to your needs.",
  keywords: "financial services, investment management, portfolio management, retirement planning, risk management, financial consulting, global finance",
  authors: [{ name: "Your Finance Business Partner" }],
  openGraph: {
    title: "Your Finance Business Partner | Global Financial Services",
    description: "Professional financial services with global expertise. Investment strategies, portfolio management, retirement planning, and risk management solutions tailored to your needs.",
    url: "https://yourfbp.com",
    siteName: "Your Finance Business Partner",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Finance Business Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Finance Business Partner | Global Financial Services",
    description: "Professional financial services with global expertise. Investment strategies, portfolio management, retirement planning, and risk management.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://yourfbp.com'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
