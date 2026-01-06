import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Shyam Arora",
  description:
    "Thoughts, tutorials, and insights about web development, developer tools, and technology.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-dark-950">{children}</div>;
}
