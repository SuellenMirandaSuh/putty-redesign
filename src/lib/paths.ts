/** Build a path that works locally and on GitHub Pages. */
export function toSitePath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL;
  if (path === "/") return base;
  return `${base}${path.slice(1)}`;
}

export function routerBase(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}
