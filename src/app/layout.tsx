import { reduceEachLeadingCommentRange } from "typescript";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bookstore</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

