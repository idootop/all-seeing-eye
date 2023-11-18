import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "👀 All-Seeing Eye",
  description:
    "Arbitrary File Read Vulnerability in Chrome Versions Prior to 116",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
