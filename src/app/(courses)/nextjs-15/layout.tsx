import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="prose dark:prose-invert prose-lg mx-auto p-3">
      {children}
    </div>
  );
}
