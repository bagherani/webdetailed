import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="prose px-4 mx-auto  dark:prose-invert prose-lg">
      {children}
    </div>
  );
}
