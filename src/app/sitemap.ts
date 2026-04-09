import type { MetadataRoute } from "next";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "src", "app");
const PAGE_FILE_PATTERN = /^page\.(js|jsx|ts|tsx|md|mdx)$/;
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamic = "force-static";

type AppRoute = {
  route: string;
  lastModified: Date;
};

function toPublicSegments(segments: string[]) {
  return segments.filter((segment) => {
    if (segment.startsWith("(") && segment.endsWith(")")) {
      return false;
    }

    if (segment.startsWith("[") || segment.startsWith("_") || segment.startsWith("@")) {
      return false;
    }

    return true;
  });
}

async function collectRoutes(
  directory: string = APP_DIR,
  segments: string[] = [],
): Promise<AppRoute[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes: AppRoute[] = [];

  const pageEntry = entries.find(
    (entry) => entry.isFile() && PAGE_FILE_PATTERN.test(entry.name),
  );

  if (pageEntry) {
    const filePath = path.join(directory, pageEntry.name);
    const fileStats = await stat(filePath);
    const publicSegments = toPublicSegments(segments);

    routes.push({
      route: publicSegments.length === 0 ? "/" : `/${publicSegments.join("/")}`,
      lastModified: fileStats.mtime,
    });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    if (entry.name.startsWith("[") || entry.name.startsWith("_") || entry.name.startsWith("@")) {
      continue;
    }

    routes.push(
      ...(await collectRoutes(path.join(directory, entry.name), [
        ...segments,
        entry.name,
      ])),
    );
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await collectRoutes();
  const uniqueRoutes = new Map<string, Date>();

  for (const { route, lastModified } of routes) {
    const existingDate = uniqueRoutes.get(route);

    if (!existingDate || lastModified > existingDate) {
      uniqueRoutes.set(route, lastModified);
    }
  }

  return Array.from(uniqueRoutes.entries())
    .sort(([leftRoute], [rightRoute]) => leftRoute.localeCompare(rightRoute))
    .map(([route, lastModified]) => ({
      url: new URL(route, BASE_URL).toString(),
      lastModified,
    }));
}
