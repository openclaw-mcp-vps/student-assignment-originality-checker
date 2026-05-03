import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OriginCheck – Detect AI-Generated Student Submissions",
  description: "Analyze writing patterns, complexity, and style to identify AI-generated content in student assignments with confidence scores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d2a546cc-7944-4d17-802b-7e686c55abb7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
