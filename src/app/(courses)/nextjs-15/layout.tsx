import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="prose mx-auto dark:prose-invert prose-lg">{children}</div>
  );
}
